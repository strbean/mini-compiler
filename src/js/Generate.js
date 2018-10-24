'use strict';

/* const util = require('util'); */

const _util = require('./util');
const { Register, Immediate } = require('./Register');

/*eslint-disable no-unused-vars*/
const {
  AddInstruction,
  MulInstruction,
  SDivInstruction,
  SubInstruction,
  AndInstruction,
  OrInstruction,
  XorInstruction,
  CmpInstruction,
  BranchInstruction,
  CBranchInstruction,
  LoadInstruction,
  StoreInstruction,
  GEPInstruction,
  CallInstruction,
  CallReadInstruction,
  CallPrintInstruction,
  RetInstruction,
  AllocaInstruction,
  CastInstruction,
  BitCastInstruction,
  TruncInstruction,
  ZExtInstruction,
  PhiInstruction,
} = require('./Instruction');
/*eslint-enable no-unused-vars*/

let blockCount = 0;

function cleanBlockList(blockList) {
  /* remove dead blocks */
  for (const block of blockList) {
    block._visited = false;
  }
  let frontier = [blockList[0]];
  while (frontier.length) {
    let currentBlock = frontier.pop();
    if (!currentBlock._visited) {
      currentBlock._visited = true;
      Array.prototype.push.apply(frontier, currentBlock.successors);
    }
  }
  blockList = blockList.filter(block => block._visited);

  /* check that we didn't get any dead ends */
  for (const block of blockList) {
    if (!block.special && !block.successors.length) {
      throw new Error(`Non-special block '${block.label}' has no successors.`);
    }
    for (const child of block.successors) {
      if (!blockList.includes(child)) {
        throw new Error(`Block '${child.label}' (with ${child.successors.length} children) not found in block list.`);
      }
    }
  }

  /* relabel blocks */
  blockCount = 0;
  for (const block of blockList) {
    block.label = `LU${blockCount++}`;
  }

  /* add predecessors */
  for (const block of blockList) {
    block._visited = false;
    block.predecessors = [];
  }
  frontier = [blockList[0]];
  while (frontier.length) {
    let currentBlock = frontier.pop();
    if (!currentBlock._visited) {
      currentBlock._visited = true;
      for (const child of currentBlock.successors) {
        frontier.push(child);
        child.predecessors.push(currentBlock);
      }
    }
  }

  return blockList;
}
function BasicBlock(predecessor, label, special) {
  /*if (label) {
    this.label = label;
  } else {*/
  this.label = `LU${blockCount++}`;
  this.special = !!special;
  this.body = [];
  this.predecessors = [];
  this.successors = [];
  if (predecessor) {
    this.predecessors.push(predecessor);
  }
}

BasicBlock.prototype.toString = function() {
  return `${this.label} -> ${this.successors.map(child => child.label).join(', ')}`;
};

function CFG(opts) {
  this.opts = opts;
  this.errs = [];
  this.warnings = [];
}

CFG.prototype.generate = function generate(ast) {
  const symbols = _util.buildSymbolDicts(ast);
  const cfgs = {
    types: ast.types,
    declarations: ast.declarations,
    functions: ast.functions.map(func => this.visitFunction(func, symbols)),
    symbols
  };
  return cfgs;
};

CFG.prototype.visitFunction = function visitFunction({ id, parameters, declarations, body, return_type }) {
  blockCount = 0;
  const cfg = this._cfg = {
    id,
    parameters,
    declarations,
    return_type,
    blockList: []
  };
  cfg.entry = new BasicBlock(null, `${id}_entry`, true);
  cfg.exit = new BasicBlock(null, `${id}_exit`, true);
  cfg.blockList.push(cfg.entry);

  let [start, end] = this.visitStatements(body, cfg.entry, cfg.exit);
  cfg.entry.successors.push(start);
  end.successors.push(cfg.exit);
  cfg.blockList.push(cfg.exit);
  this._cfg.blockList = cleanBlockList(this._cfg.blockList);
  return cfg;
};

CFG.prototype.visitStatements = function visitStatements(body, predecessor/*, successor*/) {
  const startBlock = new BasicBlock(predecessor);
  let currentBlock = startBlock;
  let nextBlock;
  this._cfg.blockList.push(startBlock);

  for (const statement of body) {
    if (!(_util.branchingStatements.includes(statement.stmt)) && statement.stmt !== 'block') {
      currentBlock.body.push(statement);
    } else {
      nextBlock = new BasicBlock();
      this[`visit${statement.stmt}`](statement, currentBlock, nextBlock);
      this._cfg.blockList.push(nextBlock);
      currentBlock = nextBlock;
    }
  }
  return [startBlock, currentBlock];
};

/* then block => idx 0, else block => idx 1 */
CFG.prototype.visitif = function visitif(statement, predecessor, successor) {
  let { stmt, guard, then } = statement;
  let _else = statement.else;

  predecessor.body.push({stmt, guard});
  let [start, end] = this.visitStatements(then.list, predecessor, successor);
  predecessor.successors.push(start);
  end.successors.push(successor);
  if (_else) {
    [start, end] = this.visitStatements(_else.list, predecessor, successor);
    predecessor.successors.push(start);
    end.successors.push(successor);
  } else {
    predecessor.successors.push(successor);
  }
};

CFG.prototype.visitwhile = function visitwhile({stmt, guard, body}, predecessor, successor) {
  predecessor.body.push({stmt, guard});
  let [start, end] = this.visitStatements(body.list, predecessor, successor);

  predecessor.successors.push(start);
  predecessor.successors.push(successor);
  end.body.push({stmt, guard});
  end.successors.push(start);
  end.successors.push(successor);
};

CFG.prototype.visitreturn = function visitreturn(statement, predecessor /*, successor */) {
  predecessor.body.push(statement);
  predecessor.successors.push(this._cfg.exit);
  //this._cfg.exit.predecessors.push(predecessor);
};

CFG.prototype.visitblock = function visitblock({ list }, predecessor, successor) {
  let [start, end] = this.visitStatements(list, predecessor, successor);
  if(!end.successors.length) {
    end.successors.push(successor);
  }
  predecessor.successors.push(start);
};

const LLVM = function LLVM(opts) {
  this.opts = opts;
  this.stackBased = opts.stack || opts.parent.stack;
  this.registerIndex = 0;
};

LLVM.typeString = type => type === 'void' ? 'void' : (_util.nativeTypes.includes(type) ? 'i32' : `%s.${type}*`);
LLVM.returnStackName = () => '%_retval_';
LLVM.globalName = name => `@g.${name}`;
LLVM.parameterName = name => `%${name}`;
LLVM.parameterStackName = name => `%_P_${name}`;
LLVM.variableStackName = name => `%_V_${name}`;
LLVM.functionName = name => `@${name}`;
LLVM.typeToStruct = type => type.split('.')[1].split('*')[0];
LLVM.imports = `declare i8* @malloc(i32)
declare void @free(i8*)
declare i32 @printf(i8*, ...)
declare i32 @scanf(i8*, ...)
@.println = private unnamed_addr constant [5 x i8] c"%ld\\0A\\00", align 1
@.print = private unnamed_addr constant [5 x i8] c"%ld \\00", align 1
@.read = private unnamed_addr constant [4 x i8] c"%ld\\00", align 1
@.read_scratch = common global i32 0, align 8`;

function functionToString() {
  const parameterString =
    this.parameters.map(({id, type}) => `${LLVM.typeString(type)} ${LLVM.parameterName(id)}`).join(', ');
  const blocksString =
    this.blockList.map(block =>
      `${block.label}:\n${block.phis.map(phi => `\t${phi}`).join('\n')}${block.phis.length ? '\n' : ''}${block.ll.map(instr => `\t${instr}`).join('\n')}`)
      .join('\n\n');
  return `define ${LLVM.typeString(this.return_type)} ${LLVM.functionName(this.id)} (${parameterString}) {\n${blocksString}\n}\n`;
}

LLVM.prototype.isLocalVar = function(id) {
  if (id === LLVM.returnStackName()) {
    return LLVM.typeString(this._cfg.return_type);
  }
  const {parameters, declarations} = this._cfg;
  const ty = declarations.find(decl => decl.id === id) || parameters.find(param => param.id === id);
  return ty && ty.type;
};

LLVM.prototype.readVar = function readVar(id, block) {
  const localVarTy = this.isLocalVar(id);
  if (localVarTy) {
    if (id in block.localMapping) {
      return block.localMapping[id];
    } else {
      const phiRegister = this.getRegister(LLVM.typeString(localVarTy));
      block.phis.push(new PhiInstruction(block, phiRegister, id));
      block.localMapping[id] = phiRegister;
      return phiRegister;
    }
  }
  else if (id in this._symbols.globals) {
    return new Register(LLVM.typeString(this._symbols.globals[id]), LLVM.globalName(id));
  } else {
    throw new Error(`Could not resolve identifier ${id}`);
  }
};

LLVM.prototype.writeVar = function writeVar(id, register, block) {
  if (this.isLocalVar(id)) {
    block.localMapping[id] = register;
  } else if (id in this._symbols.globals) {
    return new Register(LLVM.typeString(this._symbols.globals[id]), LLVM.globalName(id));
  } else {
    throw new Error(`Could not resolve identifier ${id}`);
  }
};

LLVM.getPhis = blockList => blockList.reduce((arr, block) => arr.concat(block.phis), []);
LLVM.getIncompletePhis = blockList => LLVM.getPhis(blockList).filter(phi => !phi.complete);
LLVM.getTrivialPhis = blockList => LLVM.getPhis(blockList).filter(phi => LLVM.isTrivialPhi(phi));
LLVM.isTrivialPhi = ({ incoming, dest }) =>
  incoming.length < 2
  || incoming.every(({register}) => register.name === incoming[0].register.name)
  || incoming.some(({register}) => register.name === dest.name);


LLVM.prototype.completePhis = function completePhis() {
  let incompletePhis = LLVM.getIncompletePhis(this._cfg.blockList);

  /* TODO: might not need this outer loop... */
  while (incompletePhis.length) {
    for (const phi of incompletePhis) {
      let { block, id } = phi;
      if (!block.predecessors.length) {
        throw new Error('Found phi in block with no predecessors');
      } else if (block.predecessors.length === 1) {
        let pred = block.predecessors[0];
        phi.incoming.push({ register: this.readVar(id, pred), label: pred.label });
        phi.complete = true;
      } else {
        for (const pred of block.predecessors) {
          phi.incoming.push({ register: this.readVar(id, pred), label: pred.label });
          phi.complete = true;
        }
      }
    }
    incompletePhis = LLVM.getIncompletePhis(this._cfg.blockList);
  }
};

LLVM.prototype.removeTrivialPhis = function removeTrivialPhis() {
  //return;
  let blockList = this._cfg.blockList;
  let trivialPhis = LLVM.getTrivialPhis(blockList);
  let registerObjects = [];
  for (const phi of LLVM.getPhis(blockList)) {
    for (const { register } of phi.incoming) {
      if (!registerObjects.includes(register)) {
        registerObjects.push(register);
      }
    }
    if (!registerObjects.includes(phi.dest)) {
      registerObjects.push(phi.dest);
    }
  }
  while (trivialPhis.length) {
    for (const phi of trivialPhis) {
      // This is truly awful, we end up with Register objects where the 'name' field is just an immediate value
      const oldName = phi.dest.name;
      const newName = phi.incoming[0].register.name === undefined ?  phi.incoming[0].register.value : phi.incoming[0].register.name;
      for (const register of registerObjects) {
        if (register.name === oldName) {
          register.name = newName;
        }
      }
      phi.dest.name = newName;
      phi.block.phis.splice(phi.block.phis.findIndex(_phi => phi === _phi), 1);
    }
    trivialPhis = LLVM.getTrivialPhis(this._cfg.blockList);
  }
  return;
};

LLVM.prototype.getRegister = function getRegister(type) {
  return new Register(type, `%r${this.registerIndex++}`);
};

LLVM.prototype.generate = function generate({types, declarations, functions, symbols}) {
  this._symbols = symbols;
  let opts = this.opts;
  return {
    types: this.generateTypes(types),
    declarations: this.generateDeclarations(declarations),
    functions: this.generateFunctions(functions),
    toString: function toString() {
      return `target triple="${opts.parent.targetArchitecture}"\n`
        + `${this.types.join('\n')}\n\n`
        + `${this.declarations.join('\n')}\n\n`
        + `${this.functions.join('\n')}\n\n`
        + LLVM.imports;
    }
  };
};

LLVM.prototype.generateTypes = function generateTypes(types) {
  const _types = [];
  for (const {id, fields} of types) {
    let typeStr = `%s.${id} = type `;
    let fieldsStr = [];
    for (const { type } of fields) {
      fieldsStr.push(LLVM.typeString(type));
    }
    _types.push(`${typeStr} { ${fieldsStr.join(', ')} }`);
  }
  return _types;
};

LLVM.prototype.generateDeclarations = function generateDeclarations(declarations) {
  const _globals = [];
  for (const {id, type} of declarations) {
    let ty = LLVM.typeString(type)
    _globals.push(`${LLVM.globalName(id)} = common global ${ty}${ty.includes('*') ? ' null' : ' 0'}, align 8`);
  }
  return _globals;
};


LLVM.prototype.generateFunctions = function generateFunctions(cfgs) {
  for (const cfg of cfgs) {
    cfg.toString = functionToString;
    this.generateIR(this._cfg = cfg);
  }
  return cfgs;
};

LLVM.prototype.generateIR = function generateIR(cfg) {
  let lastRegularBlock;
  //this.registerIndex = 0;
  this.localMapping = {};
  this.visitEntry(cfg);
  for (const block of cfg.blockList) {
    if (block.special) {
      continue;
    }
    this.visitBlock(block);
    lastRegularBlock = block;
  }
  if (lastRegularBlock) {
    const lastInstruction = lastRegularBlock.ll[lastRegularBlock.ll.length - 1];
    if (!(lastInstruction instanceof BranchInstruction)) {
      lastRegularBlock.ll.push(new BranchInstruction(lastRegularBlock, cfg.exit.label));
    }
  }
  this.visitExit(cfg);
  if (!this.stackBased) {
    this.completePhis();
    this.removeTrivialPhis();
  }
};

LLVM.prototype.visitEntry = function visitEntry({parameters, declarations, return_type, entry}) {
  let ll = entry.ll = [];
  entry.phis = [];

  if (this.stackBased) {
    /* allocate return value on stack */
    if (return_type !== 'void') {
      ll.push(new AllocaInstruction(entry, LLVM.returnStackName(), LLVM.typeString(return_type)));
    }

    for (const {id, type} of parameters) {
      ll.push(new AllocaInstruction(entry, LLVM.parameterStackName(id), LLVM.typeString(type)));
    }

    for (const {id, type} of declarations) {
      ll.push(new AllocaInstruction(entry, LLVM.variableStackName(id), LLVM.typeString(type)));
    }

    for (const {id, type} of parameters) {
      ll.push(new StoreInstruction(entry,
        new Register(LLVM.typeString(type), LLVM.parameterName(id)),
        new Register(LLVM.typeString(type), LLVM.parameterStackName(id))));
    }
  } else {
    let localMapping = entry.localMapping = {};
    for (const {id, type} of parameters) {
      localMapping[id] = new Register(LLVM.typeString(type), LLVM.parameterName(id));
    }
    for (const {id, type} of declarations) {
      localMapping[id] = new Register(LLVM.typeString(type), LLVM.variableStackName(id));
    }
  }

  ll.push(new BranchInstruction(entry, entry.successors[0].label));
};

LLVM.prototype.visitBlock = function visitBlock(block) {
  block.ll = [];
  block.localMapping = {};
  block.phis = [];
  this.visitStatements(block.body, block);
  /* add branch to fall-through blocks */
  if (!(block.ll[block.ll.length-1] instanceof BranchInstruction)) {
    block.ll.push(new BranchInstruction(block, block.successors[0].label));
  }
};

LLVM.prototype.visitExit = function visitExit({parameters, declarations, return_type, exit}) {
  let ll = exit.ll = [];
  let phis = exit.phis = [];

  if (return_type !== 'void') {
    const retVal = this.getRegister(LLVM.typeString(return_type));
    if (this.stackBased) {
      ll.push(new LoadInstruction(exit, retVal, LLVM.returnStackName()));
    } else {
      phis.push(new PhiInstruction(exit, retVal, LLVM.returnStackName()));
    }
    ll.push(new RetInstruction(exit, retVal));
  } else {
    ll.push(new RetInstruction(exit));
  }
};

LLVM.prototype.visitStatements = function visitStatements(statements, block) {
  for (const statement of statements) {
    if (!_util.statementRules.includes(statement.stmt)) {
      throw new Error(`Unknown statement name '${statement.stmt}`);
    }
    this[`visit${statement.stmt}`](statement, block);
  }
};

LLVM.prototype.visitif = LLVM.prototype.visitwhile = function visitif({guard}, block) {
  let guardVal = this.visitExpression(guard, block);
  if (guardVal.type !== 'i1') {
    let branchVal = this.getRegister('i1');
    block.ll.push(new TruncInstruction(block, branchVal, guardVal));
    block.ll.push(new CBranchInstruction(block, branchVal, block.successors[0].label, block.successors[1].label));
  } else {
    block.ll.push(new CBranchInstruction(block, guardVal, block.successors[0].label, block.successors[1].label));
  }
};

/*
LLVM.prototype.visitwhile = function visitwhile({guard}, block) {
  let guardVal = this.visitExpression(guard, block);
  let branchVal = this.getRegister('i1');
  block.ll.push(new TruncInstruction(branchVal, 'i32', guardVal, 'i1'));
  block.ll.push(new CBranchInstruction(branchVal, block.successors[0].label, block.successors[1].label));
};
*/

/* wait... these probably don't exist now. */
LLVM.prototype.visitblock = function visitblock({list}, block) {
  this.visitStatements(list, block);
};

LLVM.prototype.visitprint = function visitprint({line, exp, endl}, block) {
  const expVal = this.visitExpression(exp, block);
  block.ll.push(new CallPrintInstruction(block, expVal, endl));
};

LLVM.prototype.visitreturn = function visitreturn({exp}, block) {
  if (exp) {
    const retVal = this.visitExpression(exp, block);
    if (this.stackBased) {
      block.ll.push(new StoreInstruction(block, retVal, new Register(LLVM.typeString(this._cfg.return_type), LLVM.returnStackName())));
    } else {
      this.writeVar(LLVM.returnStackName(), retVal, block);
    }
  }
  block.ll.push(new BranchInstruction(block, this._cfg.exit.label));
};

LLVM.prototype.visitTarget = function visitTarget({id, left}, block) {
  if (this.stackBased) {
    const {parameters, declarations} = this._cfg;
    const {globals} = this._symbols;

    let ty, pointer;
    if (left) {
      const leftVal = this.visitTarget(left, block);
      const structName = LLVM.typeToStruct(leftVal.type);
      const {type, index} = this._symbols.structs[structName][id];
      const leftValReg = this.getRegister(LLVM.typeString(structName));
      block.ll.push(new LoadInstruction(block, leftValReg, leftVal));
      const ptrVal = this.getRegister(LLVM.typeString(type));
      block.ll.push(new GEPInstruction(block, ptrVal, leftValReg, index));
      return ptrVal;
    } else {
      if (ty = parameters.find(param => param.id === id)) {
        ty = LLVM.typeString(ty.type);
        pointer = LLVM.parameterStackName(id);
      } else if (ty = declarations.find(decl => decl.id === id)) {
        ty = LLVM.typeString(ty.type);
        pointer = LLVM.variableStackName(id);
      } else if (id in globals) {
        ty = LLVM.typeString(globals[id]);
        pointer = LLVM.globalName(id);
      } else {
        throw new Error(`Could not resolve symbol ${id}`);
      }
    }
    return new Register(ty, pointer);
  } else {
    if (left) {
      const leftVal = this.visitTarget(left, block);
      const structName = LLVM.typeToStruct(leftVal.type);
      const {type, index} = this._symbols.structs[structName][id];
      if (leftVal._root) {
        delete leftVal['_root'];
        const ptrVal = this.getRegister(LLVM.typeString(type));
        block.ll.push(new GEPInstruction(block, ptrVal, leftVal, index));
        return ptrVal;
      } else {
        const leftValReg = this.getRegister(LLVM.typeString(structName));
        block.ll.push(new LoadInstruction(block, leftValReg, leftVal));
        const ptrVal = this.getRegister(LLVM.typeString(type));
        block.ll.push(new GEPInstruction(block, ptrVal, leftValReg, index));
        return ptrVal;
      }
    } else {
      if (this.isLocalVar(id)) {
        const varReg = this.readVar(id, block);
        varReg._root = true;
        return varReg;
      } else {
        return this.readVar(id, block);
      }
    }
  }
};

LLVM.prototype.visitassign = function visitassign({source, target}, block) {
  if (this.stackBased || target.left) {
    if (source.exp === 'read') {
      const destPtr = this.visitTarget(target, block);
      block.ll.push(new CallReadInstruction(block, destPtr));
    } else {
      const sourceVal = this.visitExpression(source, block);
      const destPtr = this.visitTarget(target, block);
      block.ll.push(new StoreInstruction(block, sourceVal, destPtr));
    }
  } else {
    const {id} = target;
    if (source.exp === 'read') {
      if (this.isLocalVar(id)) {
        const currentReg = this.readVar(id, block);
        const dest = this.getRegister(currentReg.type);
        const scratch = new Register('i32*', '@.read_scratch');
        block.ll.push(new CallReadInstruction(block, scratch));
        block.ll.push(new LoadInstruction(block, dest, scratch));
        this.writeVar(id, dest, block);
      } else {
        const dest = this.readVar(id, block);
        block.ll.push(new CallReadInstruction(block, dest));
      }
    } else {
      if (this.isLocalVar(id)) {
        const sourceVal = this.visitExpression(source, block);
        this.writeVar(id, sourceVal, block);
      } else {
        const sourceVal = this.visitExpression(source, block);
        const dest = this.readVar(id, block);
        block.ll.push(new StoreInstruction(block, sourceVal, dest));
      }
    }
  }
};

LLVM.prototype.visitdelete = function visitdelete({exp}, block) {
  const delPtr = this.visitExpression(exp, block);
  const cast = this.getRegister('i8*');
  block.ll.push(new BitCastInstruction(block, cast, delPtr));
  block.ll.push(new CallInstruction(block, 'void', new Register('void', '@free'), cast));
};

LLVM.prototype.visitinvocation = function visitinvocation({id, args}, block) {
  const { return_type } = this._symbols.functions[id];
  const type = LLVM.typeString(return_type);
  const argRegisters = args.map(arg => this.visitExpression(arg, block));
  block.ll.push(new CallInstruction(block, type, LLVM.functionName(id), ...argRegisters));
};

LLVM.prototype.visitExpression = function visitExpression(expression, block) {
  if (!_util.expressionRules.includes(expression.exp)) {
    throw new Error(`Unknown expression rule '${expression.exp}'`);
  }
  if (expression.exp === 'invocation') {
    return this.visitinvocationE(expression, block);
  }
  return this[`visit${expression.exp}`](expression, block);
};

LLVM.prototype.visitinvocationE = function visitinvocationE({id, args}, block) {
  const { parameters, return_type } = this._symbols.functions[id];
  const dest = this.getRegister(LLVM.typeString(return_type));
  const argRegisters = args.map((arg, i) =>
    (this.visitExpression(arg, block)));
  block.ll.push(new CallInstruction(block, dest, LLVM.functionName(id), ...argRegisters));
  return dest;
};

LLVM.prototype.visitdot = function visitdot({left, id}, block) {
  const leftVal = this.visitExpression(left, block);
  const struct = leftVal.type.split('.')[1].slice(0, -1);
  const {type, index} = this._symbols.structs[struct][id];
  const ptrVal = this.getRegister(`${leftVal.type}*`);
  block.ll.push(new GEPInstruction(block, ptrVal, leftVal, index));
  const dest = this.getRegister(LLVM.typeString(type));
  block.ll.push(new LoadInstruction(block, dest, ptrVal));
  return dest;
};

LLVM.prototype.visitunary = function visitunary({operator, operand}, block) {
  const val = this.visitExpression(operand, block);
  if (operator === '-') {
    const dest = this.getRegister('i32');
    block.ll.push(new MulInstruction(block, dest, val, -1));
    return dest;
  } else {
    const dest = this.getRegister(val.type);
    block.ll.push(new XorInstruction(block, dest, val, new Immediate(val.type, -1)));
    return dest;
  }
};

LLVM.prototype.visitbinary = function visitbinary({operator, lft, rht}, block) {
  let dest;
  const lftVal = this.visitExpression(lft, block);
  const rhtVal = this.visitExpression(rht, block);
  switch (operator) {
    case '*':
      dest = this.getRegister('i32');
      block.ll.push(new MulInstruction(block, dest, lftVal, rhtVal));
      break;
    case '/':
      dest = this.getRegister('i32');
      block.ll.push(new SDivInstruction(block, dest, lftVal, rhtVal));
      break;
    case '+':
      dest = this.getRegister('i32');
      block.ll.push(new AddInstruction(block, dest, lftVal, rhtVal));
      break;
    case '-':
      dest = this.getRegister('i32');
      block.ll.push(new SubInstruction(block, dest, lftVal, rhtVal));
      break;
    case '<':
      dest = this.getRegister('i1');
      block.ll.push(new CmpInstruction(block, dest, 'slt', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '<=':
      dest = this.getRegister('i1');
      block.ll.push(new CmpInstruction(block, dest, 'sle', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '>':
      dest = this.getRegister('i1');
      block.ll.push(new CmpInstruction(block, dest, 'sgt', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '>=':
      dest = this.getRegister('i1');
      block.ll.push(new CmpInstruction(block, dest, 'sge', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '&&':
      dest = this.getRegister(lftVal.type);
      block.ll.push(new AndInstruction(block, dest, lftVal, rhtVal));
      break;
    case '||':
      dest = this.getRegister(lftVal.type);
      block.ll.push(new OrInstruction(block, dest, lftVal, rhtVal));
      break;
    case '==':
      dest = this.getRegister('i1');
      block.ll.push(new CmpInstruction(block, dest, 'eq', lftVal, rhtVal));
      break;
    case '!=':
      dest = this.getRegister('i1');
      block.ll.push(new CmpInstruction(block, dest, 'ne', lftVal, rhtVal));
      break;
  }
  return dest;
};

LLVM.prototype.visitid = function visitid({id}, block) {
  const { declarations, parameters } = this._cfg;
  const { globals } = this._symbols;
  if (this.stackBased) {
    let ty, pointer;
    if (ty = declarations.find(decl => decl.id === id)) {
      ty = LLVM.typeString(ty.type);
      pointer = LLVM.variableStackName(id);
    } else if (ty = parameters.find(param => param.id === id)) {
      ty = LLVM.typeString(ty.type);
      pointer = LLVM.parameterStackName(id);
    } else if (id in globals) {
      ty = LLVM.typeString(globals[id]);
      pointer = LLVM.globalName(id);
    }
    const dest = this.getRegister(ty);
    block.ll.push(new LoadInstruction(block, dest, pointer));
    return dest;
  } else {
    if (this.isLocalVar(id)) {
      return this.readVar(id, block);
    } else {
      const ty = LLVM.typeString(globals[id]);
      const pointer = LLVM.globalName(id);
      const dest = this.getRegister(ty);
      block.ll.push(new LoadInstruction(block, dest, pointer));
      return dest;
    }
  }
};

LLVM.prototype.visitnum = function visitnum({value}, block) {
  return new Immediate('i32', value);
};

LLVM.prototype.visittrue = function visittrue() {
  return new Immediate('i32', 1);
};

LLVM.prototype.visitfalse = function visitfalse() {
  return new Immediate('i32', 0);
};

LLVM.prototype.visitnew = function visitnew({id}, block) {
  const voidPtr = this.getRegister('i8*');
  const dest = this.getRegister(LLVM.typeString(id));
  const len = this._symbols.structs[id].length;
  block.ll.push(new CallInstruction(block, voidPtr, new Register('i8*', '@malloc'), new Immediate('i32', 8*len)));
  block.ll.push(new BitCastInstruction(block, dest, voidPtr));
  return dest;
};

LLVM.prototype.visitnull = function visitnull() {
  // TODO: how the fuck to handle this. Update the type higher up in assignment / comparisons?
  return new Immediate('null', null);
};

module.exports = { CFG, LLVM };
