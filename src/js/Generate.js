'use strict';

/* const util = require('util'); */

const _util = require('./util');
const { Register, Immediate } = require('./Register');
const I = require('./Instruction');
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
  return {
    types: ast.types,
    declarations: ast.declarations,
    functions: ast.functions.map(func => this.visitFunction(func)),
    symbols
  };
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
  I.configure(opts);
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
      block.phis.push(new I.PhiInstruction(block, phiRegister, id));
      block.localMapping[id] = phiRegister;
      return phiRegister;
    }
  }
  else if (id in this._symbols.globals) {
    return this.getGlobal(id);
  } else {
    throw new Error(`Could not resolve identifier ${id}`);
  }
};

LLVM.prototype.writeVar = function writeVar(id, register, block) {
  if (this.isLocalVar(id)) {
    block.localMapping[id] = register;
  } else if (id in this._symbols.globals) {
    return this.getGlobal(id);
  } else {
    throw new Error(`Could not resolve identifier ${id}`);
  }
};

LLVM.getPhis = blockList => blockList.reduce((arr, block) => arr.concat(block.phis), []);
LLVM.getIncompletePhis = blockList => LLVM.getPhis(blockList).filter(phi => !phi.complete);
LLVM.getTrivialPhis = blockList => LLVM.getPhis(blockList).filter(phi => LLVM.isTrivialPhi(phi));
LLVM.isTrivialPhi = ({ incoming, dest }) =>
  incoming.length < 2
  || incoming.every(({register}) => `${register}` === `${incoming[0].register}`)
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
        let predVal = { register: this.readVar(id, pred), label: pred.label };
        if (predVal.register.type === 'null') {
          predVal.register.type = phi.dest.type;
        }
        phi.push(predVal);
        phi.complete = true;
      } else {
        for (const pred of block.predecessors) {
          let predVal = { register: this.readVar(id, pred), label: pred.label };
          if (predVal.register.type === 'null') {
            predVal.register.type = phi.dest.type;
          }
          phi.push(predVal);
        }
        phi.complete = true;
      }
    }
    incompletePhis = LLVM.getIncompletePhis(this._cfg.blockList);
  }
};

LLVM.prototype.removeTrivialPhis = function removeTrivialPhis() {
  //return;
  let blockList = this._cfg.blockList;
  let trivialPhis = LLVM.getTrivialPhis(blockList);

  while (trivialPhis.length) {
    for (const phi of trivialPhis) {
      for (const instr of phi.dest.used) {
        instr.rewriteRegister(phi.dest, phi.incoming[0].register);
      }

      for (const {register} of phi.incoming) {
        if (register instanceof Register) {
          register.used = register.used.filter(instr => instr != phi);
        }
      }
      phi.block.phis.splice(phi.block.phis.findIndex(_phi => phi === _phi), 1);
    }
    trivialPhis = LLVM.getTrivialPhis(this._cfg.blockList);
  }
  return;
};

LLVM.prototype.getRegister = function getRegister(type) {
  return new Register(type, `%r${this.registerIndex++}`);
};

LLVM.prototype.getGlobal = function getGlobal(name) {
  const { globals } = this._symbols;
  if (name in this._globalRegisters) {
    return this._globalRegisters[name];
  } else {
    const register = new Register(LLVM.typeString(globals[name]), LLVM.globalName(name));
    this._globalRegisters[name] = register;
    return register;
  }
};

LLVM.prototype.getParameter = function getParameter(name) {
  if (name in this._cfg._parameterRegisters) {
    return this._cfg._parameterRegisters[name];
  } else {
    const {type} = this._cfg.parameters.find(p => p.id === name);
    const register = new Register(LLVM.typeString(type), LLVM.parameterName(name));
    this._cfg._parameterRegisters[name] = register;
    return register;
  }
};

LLVM.prototype.getStackParameter = function getStackParameter(name) {
  if (name in this._cfg._stackParameterRegisters) {
    return this._cfg._stackParameterRegisters[name];
  } else {
    const {type} = this._cfg.parameters.find(p => p.id === name);
    const register = new Register(LLVM.typeString(type), LLVM.parameterStackName(name));
    this._cfg._stackParameterRegisters[name] = register;
    return register;
  }
};

LLVM.prototype.getVariable = function getVariable(name) {
  if (name in this._cfg._variableRegisters) {
    return this._cfg._variableRegisters[name];
  } else {
    const {type} = this._cfg.declarations.find(d => d.id === name);
    const register = new Register(LLVM.typeString(type), LLVM.variableStackName(name));
    this._cfg._variableRegisters[name] = register;
    return register;
  }
};

LLVM.prototype.getReturn = function getReturn() {
  return this._cfg._returnRegister;
};

LLVM.prototype.generate = function generate({types, declarations, functions, symbols}) {
  this._symbols = symbols;
  this._globalRegisters = {};
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
    let ty = LLVM.typeString(type);
    _globals.push(`${LLVM.globalName(id)} = common global ${ty}${ty.includes('*') ? ' null' : ' 0'}, align 8`);
  }
  return _globals;
};


LLVM.prototype.generateFunctions = function generateFunctions(cfgs) {
  for (const cfg of cfgs) {
    cfg.toString = functionToString;
    cfg._parameterRegisters = {};
    cfg._stackParameterRegisters = {};
    cfg._variableRegisters = {};
    cfg._returnRegister = new Register(LLVM.typeString(cfg.return_type), LLVM.returnStackName());
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
    if (!(lastInstruction instanceof I.BranchInstruction)) {
      lastRegularBlock.ll.push(new I.BranchInstruction(lastRegularBlock, cfg.exit.label));
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
      ll.push(new I.AllocaInstruction(entry, this.getReturn()));
    }

    for (const {id} of parameters) {
      ll.push(new I.AllocaInstruction(entry, this.getStackParameter(id)));
    }

    for (const {id} of declarations) {
      ll.push(new I.AllocaInstruction(entry, this.getVariable(id)));
    }

    for (const {id} of parameters) {
      ll.push(new I.StoreInstruction(entry,
        this.getParameter(id),
        this.getStackParameter(id)));
    }
  } else {
    let localMapping = entry.localMapping = {};
    for (const {id} of parameters) {
      localMapping[id] = this.getParameter(id);
    }
    for (const {id} of declarations) {
      localMapping[id] = this.getVariable(id);
    }
  }

  if (entry.successors.length) {
    ll.push(new I.BranchInstruction(entry, entry.successors[0]));
  }
};

LLVM.prototype.visitBlock = function visitBlock(block) {
  block.ll = [];
  block.localMapping = {};
  block.phis = [];
  this.visitStatements(block.body, block);
  /* add branch to fall-through blocks */
  if (!(block.ll[block.ll.length-1] instanceof I.BranchInstruction)) {
    block.ll.push(new I.BranchInstruction(block, block.successors[0]));
  }
};

LLVM.prototype.visitExit = function visitExit({return_type, exit}) {
  let ll = exit.ll = [];
  let phis = exit.phis = [];

  if (return_type !== 'void') {
    let retVal;
    if (this.stackBased) {
      let ret = this.getReturn();
      retVal = this.getRegister(ret.type);
      ll.push(new I.LoadInstruction(exit, retVal, ret));
    } else {
      retVal = this.getReturn();
      phis.push(new I.PhiInstruction(exit, retVal, LLVM.returnStackName()));
    }
    ll.push(new I.RetInstruction(exit, retVal));
  } else {
    ll.push(new I.RetInstruction(exit));
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
    block.ll.push(new I.TruncInstruction(block, branchVal, guardVal));
    block.ll.push(new I.CBranchInstruction(block, branchVal, block.successors[0], block.successors[1]));
  } else {
    block.ll.push(new I.CBranchInstruction(block, guardVal, block.successors[0], block.successors[1]));
  }
};

/* wait... these probably don't exist now. */
LLVM.prototype.visitblock = function visitblock({list}, block) {
  this.visitStatements(list, block);
};

LLVM.prototype.visitprint = function visitprint({exp, endl}, block) {
  const expVal = this.visitExpression(exp, block);
  block.ll.push(new I.CallPrintInstruction(block, expVal, endl));
};

LLVM.prototype.visitreturn = function visitreturn({exp}, block) {
  if (exp) {
    const retVal = this.visitExpression(exp, block);
    if (this.stackBased) {
      block.ll.push(new I.StoreInstruction(block, retVal, new Register(LLVM.typeString(this._cfg.return_type), LLVM.returnStackName())));
    } else {
      this.writeVar(LLVM.returnStackName(), retVal, block);
    }
  }
  block.ll.push(new I.BranchInstruction(block, this._cfg.exit));
};

LLVM.prototype.visitassign = function visitassign({source, target}, block) {
  let destPtr;
  const {id, left} = target;

  // Determine destination; leave undefined if we will just 'writeVar' it.
  if (left) {
    const structPtr = this.visitExpression(left, block);
    const {type, index} = this._symbols.structs[LLVM.typeToStruct(structPtr.type)][id];
    destPtr = this.getRegister(LLVM.typeString(type));
    block.ll.push(new I.GEPInstruction(block, destPtr, structPtr, index));
  } else if(!this.isLocalVar(id)) {
    destPtr = this.getGlobal(id);
  } else if(this.stackBased) {
    let {parameters, declarations} = this._cfg;
    if (parameters.find(param => param.id === id)) {
      destPtr = this.getStackParameter(id);
    } else if (declarations.find(decl => decl.id === id)) {
      destPtr = this.getVariable(id);
    }
  }

  // Get source value / perform read, store to destination / writeVal
  if (source.exp === 'read') {
    if (destPtr) {
      block.ll.push(new I.CallReadInstruction(block, destPtr));
    } else {
      const scratch = new Register('i32*', '@.read_scratch');
      block.ll.push(new I.CallReadInstruction(block, scratch));
      destPtr = this.getRegister('i32');
      block.ll.push(new I.LoadInstruction(block, destPtr, scratch));
      this.writeVar(id, destPtr, block);
    }
  } else {
    const sourceVal = this.visitExpression(source, block);
    if (destPtr) {
      block.ll.push(new I.StoreInstruction(block, sourceVal, destPtr));
    } else {
      this.writeVar(id, sourceVal, block);
    }
  }
};

LLVM.prototype.visitdelete = function visitdelete({exp}, block) {
  const delPtr = this.visitExpression(exp, block);
  const cast = this.getRegister('i8*');
  block.ll.push(new I.BitCastInstruction(block, cast, delPtr));
  block.ll.push(new I.CallInstruction(block, 'void', new Register('void', '@free'), cast));
};

LLVM.prototype.upcastNullArguments = function upcastNullArguments(id, argList) {
  const paramList = this._symbols.functions[id].parameterList;
  for (let i = 0; i < argList.length; i++) {
    if (argList[i].type === 'null') {
      argList[i].type = LLVM.typeString(paramList[i]);
    }
  }
  return argList;
};

LLVM.prototype.visitinvocation = function visitinvocation({id, args}, block) {
  const { return_type } = this._symbols.functions[id];
  const type = LLVM.typeString(return_type);
  let argRegisters = this.upcastNullArguments(id, args.map(arg => this.visitExpression(arg, block)));
  /* extend any bool arguments that are i1's */
  argRegisters = argRegisters.map(arg => {
    if (arg.type === 'i1') {
      if (arg instanceof Immediate) {
        return new Immediate('i32', arg.value);
      } else {
        let extendedVal = this.getRegister('i32');
        block.ll.push(new I.ZExtInstruction(block, extendedVal, arg));
        return extendedVal;
      }
    }
    return arg;
  });
  block.ll.push(new I.CallInstruction(block, type, LLVM.functionName(id), ...argRegisters));
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
  const { return_type } = this._symbols.functions[id];
  const dest = this.getRegister(LLVM.typeString(return_type));
  const argRegisters = this.upcastNullArguments(id, args.map(arg => this.visitExpression(arg, block)));
  block.ll.push(new I.CallInstruction(block, dest, LLVM.functionName(id), ...argRegisters));
  return dest;
};

LLVM.prototype.visitdot = function visitdot({left, id}, block) {
  const leftVal = this.visitExpression(left, block);
  const struct = leftVal.type.split('.')[1].slice(0, -1);
  const {type, index} = this._symbols.structs[struct][id];
  const ptrVal = this.getRegister(`${leftVal.type}*`);
  block.ll.push(new I.GEPInstruction(block, ptrVal, leftVal, index));
  const dest = this.getRegister(LLVM.typeString(type));
  block.ll.push(new I.LoadInstruction(block, dest, ptrVal));
  return dest;
};

LLVM.prototype.visitunary = function visitunary({operator, operand}, block) {
  const val = this.visitExpression(operand, block);
  if (operator === '-') {
    const dest = this.getRegister('i32');
    block.ll.push(new I.MulInstruction(block, dest, val, new Immediate(val.type, -1)));
    return dest;
  } else {
    const dest = this.getRegister(val.type);
    block.ll.push(new I.XorInstruction(block, dest, val, new Immediate(val.type, -1)));
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
      block.ll.push(new I.MulInstruction(block, dest, lftVal, rhtVal));
      break;
    case '/':
      dest = this.getRegister('i32');
      block.ll.push(new I.SDivInstruction(block, dest, lftVal, rhtVal));
      break;
    case '+':
      dest = this.getRegister('i32');
      block.ll.push(new I.AddInstruction(block, dest, lftVal, rhtVal));
      break;
    case '-':
      dest = this.getRegister('i32');
      block.ll.push(new I.SubInstruction(block, dest, lftVal, rhtVal));
      break;
    case '<':
      dest = this.getRegister('i1');
      block.ll.push(new I.CmpInstruction(block, dest, 'slt', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '<=':
      dest = this.getRegister('i1');
      block.ll.push(new I.CmpInstruction(block, dest, 'sle', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '>':
      dest = this.getRegister('i1');
      block.ll.push(new I.CmpInstruction(block, dest, 'sgt', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '>=':
      dest = this.getRegister('i1');
      block.ll.push(new I.CmpInstruction(block, dest, 'sge', lftVal, rhtVal));
      //block.ll.push(new ZExtInstruction(dest, temp));
      break;
    case '&&':
      dest = this.getRegister(lftVal.type);
      block.ll.push(new I.AndInstruction(block, dest, lftVal, rhtVal));
      break;
    case '||':
      dest = this.getRegister(lftVal.type);
      block.ll.push(new I.OrInstruction(block, dest, lftVal, rhtVal));
      break;
    case '==':
      dest = this.getRegister('i1');
      block.ll.push(new I.CmpInstruction(block, dest, 'eq', lftVal, rhtVal));
      break;
    case '!=':
      dest = this.getRegister('i1');
      block.ll.push(new I.CmpInstruction(block, dest, 'ne', lftVal, rhtVal));
      break;
  }
  return dest;
};

LLVM.prototype.visitid = function visitid({id}, block) {
  const { declarations, parameters } = this._cfg;
  const { globals } = this._symbols;
  if (this.stackBased) {
    let ty, pointer;
    if (ty= declarations.find(decl => decl.id === id)) { //eslint-disable-line no-cond-assign
      ty = LLVM.typeString(ty.type);
      pointer = this.getVariable(id);
    } else if (ty = parameters.find(param => param.id === id)) { //eslint-disable-line no-cond-assign
      ty = LLVM.typeString(ty.type);
      pointer = this.getStackParameter(id);
    } else if (id in globals) {
      ty = LLVM.typeString(globals[id]);
      pointer = this.getGlobal(id);
    }
    const dest = this.getRegister(ty);
    block.ll.push(new I.LoadInstruction(block, dest, pointer));
    return dest;
  } else {
    if (this.isLocalVar(id)) {
      return this.readVar(id, block);
    } else {
      const pointer = this.getGlobal(id);
      const dest = this.getRegister(pointer.type);
      block.ll.push(new I.LoadInstruction(block, dest, pointer));
      return dest;
    }
  }
};

LLVM.prototype.visitnum = function visitnum({value}) {
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
  block.ll.push(new I.CallInstruction(block, voidPtr, new Register('i8*', '@malloc'), new Immediate('i32', 8*len)));
  block.ll.push(new I.BitCastInstruction(block, dest, voidPtr));
  return dest;
};

LLVM.prototype.visitnull = function visitnull() {
  // TODO: how the fuck to handle this. Update the type higher up in assignment / comparisons?
  return new Immediate('null', 'null');
};

module.exports = { CFG, LLVM };
