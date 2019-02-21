'use strict';

const I = require('./Instruction');
const ARMI = require('./ARMInstruction');
const { Register, RealRegister, Global, StackVar, Immediate, RealImmediate, Spill } = require('./Register');

const fp = new RealRegister('fp');
const pc = new RealRegister('pc');
function getIReg(cfg) {
  return new Register('i32', `%i${cfg._iregIdx++}`);
}

function isEncodableImmediate(imm) {
  let value = imm.value || imm;
  let mask = 0b11111111;
}

// r9 and r10 reserved for loading/storing spills
// last register never gets used for some reason...
const availableRegisters = ['r4', 'r5', 'r6', 'r7', 'r8', 'DEADBEEF - if this is being used something is wrong'];

function toArmCondition(condition) {
  switch(condition) {
    case 'eq': //equal
      return 'eq';
    case 'ne': //not equal
      return 'ne';
    case 'ugt': //unsigned greater than
      return 'hi';
    case 'uge': //unsigned greater or equal
      return 'hs';
    case 'ult': //unsigned less than
      return 'lo';
    case 'ule': //unsigned less or equal
      return 'ls';
    case 'sgt': //signed greater than
      return 'gt';
    case 'sge': //signed greater or equal
      return 'ge';
    case 'slt': //signed less than
      return 'lt';
    case 'sle': //signed less or equal
      return 'le';
  }
}

function translateInstruction(cfg, block, instr) {
  let armInstrs = [];
  for (const key in instr) {
    if (instr.hasOwnProperty(key) && instr[key] instanceof Immediate) {
      // lazy test for "can this value be encoded as an arm immediate"
      let value = instr[key].value === 'null' ? 0 : instr[key].value;
      if (value <= 0xFF && value >= 0 ) {
        instr[key] = new RealImmediate(value);
      } else {
        let tempRegister = getIReg(cfg);
        armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, new RealImmediate(value)));
        instr[key] = tempRegister;
      }
    }
  }

  if (instr instanceof I.CallInstruction) {
    for (let i = instr.args.length; i >= 0; i--) {
      const arg = instr.args[i];
      if (arg instanceof Immediate) {
        // lazy test for "can this value be encoded as an arm immediate"
        let value = arg.value === 'null' ? 0 : arg.value;
        if (i < 4 && value <= 0xFF && value >= 0 ) {
          instr.args[i] = new RealImmediate(value);
        } else {
          let tempRegister = getIReg(cfg);
          armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, new RealImmediate(value)));
          instr.args[i] = tempRegister;
        }
      }
    }
  }

  if (instr.op1 instanceof RealImmediate) {
    let tempRegister = getIReg(cfg);
    armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, instr.op1));
    instr.op1 = tempRegister;
  }

  switch (instr.constructor) {
    case I.AddInstruction:
      armInstrs.push(new ARMI.AddInstruction(block, instr.dest, instr.op1, instr.op2));
      break;
    case I.SubInstruction:
      armInstrs.push(new ARMI.SubInstruction(block, instr.dest, instr.op1, instr.op2));
      break;
    case I.MulInstruction:
      if (instr.op2 instanceof RealImmediate) {
        let tempRegister = getIReg(cfg);
        armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, new RealImmediate(instr.op2.value)));
        instr.op2 = tempRegister;
      }
      armInstrs.push(new ARMI.MulInstruction(block, instr.dest, instr.op1, instr.op2));
      break;
    case I.SDivInstruction:
      armInstrs.push(new ARMI.MovInstruction(block, new RealRegister('r0'), instr.op1));
      armInstrs.push(new ARMI.MovInstruction(block, new RealRegister('r1'), instr.op2));
      armInstrs.push(new ARMI.BranchLInstruction(block, '__aeabi_idiv'));
      armInstrs.push(new ARMI.MovInstruction(block, instr.dest, new RealRegister('r0')));
      break;
    case I.AndInstruction:
      armInstrs.push(new ARMI.AndInstruction(block, instr.dest, instr.op1, instr.op2));
      break;
    case I.OrInstruction:
      armInstrs.push(new ARMI.OrrInstruction(block, instr.dest, instr.op1, instr.op2));
      break;
    case I.XorInstruction:
      armInstrs.push(new ARMI.EorInstruction(block, instr.dest, instr.op1, instr.op2));
      break;
    case I.CmpInstruction: {
      armInstrs.push(new ARMI.MovInstruction(block, instr.dest, new RealImmediate(0)));
      armInstrs.push(new ARMI.CmpInstruction(block, instr.op1, instr.op2));
      armInstrs.push(new ARMI.MovInstruction(block, instr.dest, new RealImmediate(1), toArmCondition(instr.cond)));
      break;
    }
    case I.BranchInstruction:
      for (const phi of instr.to.phis) {
        const input = phi.incoming.find(p => p.label === block.label);
        const register = input.register;
        if (register instanceof Immediate) {
          const value = register.value === 'null' ? 0 : register.value;
          if (value <= 0xFF && value >= 0 ) {
            input.register = new RealImmediate(value);
          } else {
            let tempRegister = getIReg(cfg);
            armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, new RealImmediate(value)));
            input.register = tempRegister;
          }
        }
        armInstrs.push(new ARMI.MovInstruction(block, phi.dest, input.register));
      }
      armInstrs.push(new ARMI.BranchInstruction(block, instr.to));
      break;
    case I.CBranchInstruction:
      armInstrs.push(new ARMI.CmpInstruction(block, instr.cond, new RealImmediate(1)));

      for (const phi of instr.iftrue.phis) {
        const input = phi.incoming.find(p => p.label === block.label);
        const register = input.register;
        if (register instanceof Immediate) {
          const value = register.value === 'null' ? 0 : register.value;
          if (value <= 0xFF && value >= 0 ) {
            input.register = new RealImmediate(value);
          } else {
            let tempRegister = getIReg(cfg);
            armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, new RealImmediate(value)));
            input.register = tempRegister;
          }
        }
        armInstrs.push(new ARMI.MovInstruction(block, phi.dest, input.register, 'eq'));
      }
      armInstrs.push(new ARMI.BranchInstruction(block, instr.iftrue, 'eq'));

      for (const phi of instr.iffalse.phis) {
        const input = phi.incoming.find(p => p.label === block.label);
        const register = input.register;
        if (register instanceof Immediate) {
          const value = register.value === 'null' ? 0 : register.value;
          if (value <= 0xFF && value >= 0 ) {
            input.register = new RealImmediate(value);
          } else {
            let tempRegister = getIReg(cfg);
            armInstrs.push(new ARMI.LoadInstruction(block, tempRegister, new RealImmediate(value)));
            input.register = tempRegister;
          }
        }
        armInstrs.push(new ARMI.MovInstruction(block, phi.dest, input.register));
      }
      armInstrs.push(new ARMI.BranchInstruction(block, instr.iffalse));
      break;
    case I.LoadInstruction:
      if (instr.pointer.name.startsWith('@g.')) {
        let tempReg = getIReg(cfg);
        let global = new Global(block, instr.pointer.name);
        block._globalsUsed = block._globalsUsed || [];
        pushUnique(block._globalsUsed, global.name);
        armInstrs.push(new ARMI.LoadInstruction(block, tempReg, global));
        armInstrs.push(new ARMI.LoadInstruction(block, instr.dest, tempReg));
      } else if (instr.pointer.name.startsWith('%_')) {
        armInstrs.push(new ARMI.LoadInstruction(block, instr.dest, new StackVar(cfg, cfg._stackVars[instr.pointer.name])));
      } else {
        armInstrs.push(new ARMI.LoadInstruction(block, instr.dest, instr.pointer));
      }
      break;
    case I.StoreInstruction: {
      let pointer = instr.pointer;
      if (instr.pointer.name.startsWith('@g.')) {
        pointer = getIReg(cfg);
        let global = new Global(block, instr.pointer.name);
        block._globalsUsed = block._globalsUsed || [];
        pushUnique(block._globalsUsed, global.name);
        armInstrs.push(new ARMI.LoadInstruction(block, pointer, global));
      }  else if (instr.pointer.name.startsWith('%_')) {
        pointer = new StackVar(cfg, cfg._stackVars[instr.pointer.name]);
      }
      if (instr.val instanceof Immediate || instr.val instanceof RealImmediate) {
        let temp = getIReg(cfg);
        armInstrs.push(new ARMI.LoadInstruction(block, temp, instr.val));
        armInstrs.push(new ARMI.StoreInstruction(block, temp, pointer));
      } else {
        armInstrs.push(new ARMI.StoreInstruction(block, instr.val, pointer));
      }
    }
      break;
    case I.GEPInstruction:
      armInstrs.push(new ARMI.AddInstruction(block, instr.dest, instr.ptrval, new RealImmediate(4 * instr.index)));
      break;
    case I.CallInstruction: {
      let uses = [];
      for (let i = instr.args.length - 1; i >= 4 ; i--) {
        armInstrs.push(new ARMI.PushInstruction(block, instr.args[i]));
      }
      for (let i = (instr.args.length - 1 < 3 ? instr.args.length - 1 : 3); i >= 0; i--) {
        let argReg = new RealRegister(`r${i}`);
        armInstrs.push(new ARMI.MovInstruction(block, argReg, instr.args[i]));
      }
      let label = instr.fnptrval.name || instr.fnptrval;
      label = label.split('@').join('');
      armInstrs.push(new ARMI.BranchLInstruction(block, label));
      if (instr.dest && instr.dest !== 'void') {
        armInstrs.push(new ARMI.MovInstruction(block, instr.dest, new RealRegister('r0')));
      }
      if (instr.args.length > 3) {
        armInstrs.push(new ARMI.AddInstruction(block, new RealRegister('sp'), new RealRegister('sp'), new RealImmediate(4*(instr.args.length-4))));
      }
      break;
    }
    case I.CallReadInstruction:
      if (instr.dest.name.startsWith('%_')) {
        instr.dest = new StackVar(cfg, cfg._stackVars[instr.dest]);
      }
      armInstrs.push(new ARMI.CallReadInstruction(block, instr.dest));
      break;
    case I.CallPrintInstruction:
      armInstrs.push(new ARMI.CallPrintInstruction(block, instr.val, instr.endl));
      break;
    case I.RetInstruction:
      I.Ret
      if (instr.val) {
        armInstrs.push(new ARMI.MovInstruction(block, new RealRegister('r0'), instr.val));
      }
      //armInstrs.push(new ARMI.PopInstruction(block, fp, pc));
      break;
    case I.AllocaInstruction:
      cfg._stackVarIndex = cfg._stackVarIndex || 0;
      cfg._stackVars = cfg._stackVars || {};
      cfg._stackVars[instr.dest] = cfg._stackVarIndex++;
      break;
    case I.BitCastInstruction:
      armInstrs.push(new ARMI.MovInstruction(block, instr.dest, instr.op));
      break;
    case I.TruncInstruction:
      if (instr.dest.type === 'i32') {
        armInstrs.push(new ARMI.MovInstruction(block, instr.dest, instr.op));
      } else if(instr.dest.type === 'i1') {
        if (instr.op instanceof RealImmediate) {
          if (instr.op.value) {
            armInstrs.push(new ARMI.MovInstruction(block, instr.dest, new RealImmediate(1)));
          } else {
            armInstrs.push(new ARMI.MovInstruction(block, instr.dest, new RealImmediate(0)));
          }
        } else {
          armInstrs.push(new ARMI.AndInstruction(block, instr.dest, instr.op, new RealImmediate(1)));
        }
      } else {
        throw new Error(`Truncate to unsupported type: ${instr.dest.type}`);
      }
      break;
    case I.ZExtInstruction:
      armInstrs.push(new ARMI.MovInstruction(block, instr.dest, instr.value));
      break;
    default:
      throw new Error('Could not find constructor for LLVM instruction');
  }
  block.arm.push.apply(block.arm, armInstrs);
  return;
}

/**
 * @return {string}
 */
function ARMString() {
  const { functions } = this;
  return '\t.arch armv7-a\n\t' +
    `\n\t${this.declarations.map(({id}) => `.comm ${id},4,4`).join('\n\t')}` +
    '\n\t.text\n' +
    `${functions.join('\n')}` +
    '\n\t.section\t.rodata\n' +
    '\t.align\t2\n' +
    '.PRINTLN_FMT:\n' +
    '\t.asciz\t"%ld\\n"\n' +
    '\t.align\t2\n' +
    '.PRINT_FMT:\n' +
    '\t.asciz\t"%ld "\n' +
    '\t.align\t2\n' +
    '.READ_FMT:\n' +
    '\t.asciz\t"%ld"\n' +
    '\t.comm\t.read_scratch,4,4\n' +
    '\t.global\t__aeabi_idiv\n';
}

function funcString() {
  return `\t.align 2\n\t.global ${this.id}\n${this.id}:\n` +
    this.blockList.join('\n') +
    `\n\t.size ${this.id}, .-${this.id}`;
}

function blockString() {
  let str = `.${this.label}:\n\t`;
  if (this.entry) {
    str += 'push {fp, lr}\n\tadd fp, sp, #4\n\t';
    str += `push {${this._cfg._armRegistersUsed.join(', ')}}\n\t`;
    if (this._cfg._spillCount || this._cfg._stackVarIndex) {
      str += `sub sp, sp, #${4 * (this._cfg._spillCount + this._cfg._stackVarIndex)}\n\t`;
    }
  }
  str += this.arm.join('\n\t');
  if (this.exit) {
    if (this._cfg._spillCount || this._cfg._stackVarIndex) {
      str += `\n\tadd sp, sp, #${4 * (this._cfg._spillCount + this._cfg._stackVarIndex)}`;
    }

    str += `\n\tpop {${this._cfg._armRegistersUsed.join(', ')}}`;
    str += '\n\tpop {fp, pc}';
  }
  if (this._globalsUsed) {
    for (const global of this._globalsUsed) {
      str += `\n.${this.label}_${global}:\n\t.word ${global}`
    }
  }
  return str;
}

function translateBlock(cfg, block) {
  block.arm = [];
  if (block.entry) {
    for (let i = 0; i < 4 && i < cfg.parameters.length; i++) {
      const param = cfg.parameters[i].id;
      block.arm.push(new ARMI.MovInstruction(block, cfg._parameterRegisters[param], new RealRegister(`r${i}`)));
    }
    for (let i = 4; i < cfg.parameters.length; i++) {
      const param = cfg.parameters[i].id;
      block.arm.push(new ARMI.LoadInstruction(block, cfg._parameterRegisters[param], new RealRegister(`fp, #${4*(i-3)}`)));
    }
  }
  for (const instr of block.ll) {
    translateInstruction(cfg, block, instr);
  }
  block._cfg = cfg;
  block.toString = blockString;
}

function translate(cfg) {
  for (const name in cfg._parameterRegisters) {
    if (cfg._parameterRegisters.hasOwnProperty(name)) {
      cfg._parameterRegisters[name] = new Register('i32', cfg._parameterRegisters[name].name);
    }
  }
  cfg._iregIdx = 0;
  cfg.blockList[0].entry = true;
  cfg.blockList[cfg.blockList.length - 1].exit = true;
  for (const block of cfg.blockList) {
    translateBlock(cfg, block);
  }
  cfg._stackVarIndex = cfg._stackVarIndex || 0;
  cfg.toString = funcString;
}

function buildGenKill(block) {
  const gen = block._gen = [];
  const kill = block._kill = [];
  for (const instr of block.arm) {
    for (const used of instr.getUses().filter(isA(Register))) {
      if (!kill.includes(used) && !gen.includes(used)) {
        gen.push(used);
      }
    }
    if (instr.dest && isA(Register)(instr.dest) && !kill.includes(instr.dest)) {
      kill.push(instr.dest);
    }
  }
}

function setDifference(a, b) {
  return a.filter(val => !b.includes(val));
}

function pushUnique(array, ...vals) {
  for (const val of vals) {
    if (!array.includes(val)) {
      array.push(val);
    }
  }
}

function isA(cls) {
  return (val => val instanceof cls);
}

function buildLiveOut(block) {
  const LO = block._LO = [];
  for (const succ of block.successors) {
    pushUnique(LO, ...succ._gen);
    if (succ._LO) {
      pushUnique(LO, ...setDifference(succ._LO, succ._kill));
    }
  }
}

function arrayEquals(a, b) {
  if (!a || !b || a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

function getKeys(obj) {
  let arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}

function getElements(obj) {
  let arr = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

class InterferenceGraph {
  constructor() {
    this.graph = {};
    this.nodes = {};
  }

  addEdges(element, set) {
    this.graph[element] = this.graph[element] || {};
    for(const element2 of set) {
      this.nodes[element] = element;
      this.nodes[element2] = element;
      this.graph[element2] = this.graph[element2] || {};
      this.graph[element][element2] = true;
      this.graph[element2][element] = true;
    }
  }

  removeNode(element) {
    for (const key of getKeys(this.graph[element])) {
      delete this.graph[key][element];
    }
    delete this.graph[element];
  }

  getNodeByDegreeLT(k) {
    for (const key of getKeys(this.graph)) {
      if (getKeys(this.graph[key]).length < k) {
        return key;
      }
    }
    return null;
  }

  getNodeByDegreeGTE(k) {
    for (const key of getKeys(this.graph)) {
      if (getKeys(this.graph[key]).length >= k) {
        return key;
      }
    }
    return null;
  }

  getEdgesOfNode(key) {
    return getKeys(this.graph[key]);
  }

  count() {
    return getKeys(this.graph).length;
  }
}

function addGraphEdges(block, graph) {
  let liveSet = Array.from(block._LO);
  for (let i = block.arm.length - 1; i >= 0; i--) {
    const instr = block.arm[i];
    if (instr.dest && instr.dest instanceof Register) {
      graph.addEdges(instr.dest, liveSet);
      liveSet = liveSet.filter(val => val !== instr.dest);
    }
    pushUnique(liveSet, ...instr.getUses().filter(isA(Register)));
  }
}

function buildInterferenceGraph(cfg) {
  for (const block of cfg.blockList) {
    buildGenKill(block);
  }

  let LOSizes;
  let newLOSizes = new Array(cfg.blockList.length).fill(0);

  do {
    LOSizes = newLOSizes;
    newLOSizes = [];
    for (let i = cfg.blockList.length - 1; i >= 0; i--) {
      const block = cfg.blockList[i];
      buildLiveOut(block);
      newLOSizes.push(block._LO.length);
    }
  } while (!arrayEquals(LOSizes, newLOSizes));

  let graph = new InterferenceGraph();
  for (const block of cfg.blockList) {
    addGraphEdges(block, graph);
  }
  return graph;
}

function colorGraph(graph, colors) {
  const stack = [];
  const coloring = {};
  const spills = [];
  const colorsUsed = [];
  let node, edges;
  while (graph.count()) {
    node = graph.getNodeByDegreeLT(colors.length);
    if (node) {
      stack.push([node, graph.getEdgesOfNode(node)]);
      graph.removeNode(node);
    } else {
      node = graph.getNodeByDegreeGTE(colors.length);
      spills.push([node, graph.getEdgesOfNode(node)]);
      graph.removeNode(node);
    }
  }

  let nodeAndEdges;
  while ( (nodeAndEdges = stack.pop()) ) {
    [node, edges] = nodeAndEdges;
    let usedColors = edges.map(edge => coloring[edge]).filter(color => color !== undefined);
    pushUnique(colorsUsed, coloring[node] = setDifference(colors, usedColors)[0]);
  }

  return [coloring, spills, colorsUsed];
}

function insertBefore(array, before, element) {
  array.splice(array.findIndex(val => val === before), 0, element);
}

function insertAfter(array, after, element) {
  array.splice(array.findIndex(val => val === after)+1, 0, element);
}

function assignRealRegisters(cfg, coloring) {
  for (const block of cfg.blockList) {
    for (const instr of block.arm) {
      for (const register of getElements(instr).filter(isA(Register))) {
        if (coloring.hasOwnProperty(register.name)) {
          register.name = coloring[register];
        }
      }
      let spillRegisters = ['r10', 'r9'];
      for (const register of instr.getUses().filter(isA(Register))) {
        if (cfg._spills.hasOwnProperty(register.name)) {
          const spillReg = new RealRegister(spillRegisters.pop());
          const spillIndex = cfg._spills[register.name].index;
          instr.rewriteRegister(register, spillReg);
          insertBefore(block.arm, instr,
            new ARMI.LoadInstruction(block, spillReg, new RealRegister(`fp, #-${4*(cfg._armRegistersUsed.length + cfg._stackVarIndex + spillIndex + 2)}`)));
        }
      }
      if (instr.dest && cfg._spills.hasOwnProperty(instr.dest.name)) {
        const spillReg = new RealRegister('r9');
        const spillIndex = cfg._spills[instr.dest.name].index;
        instr.dest = spillReg;
        insertAfter(block.arm, instr,
          new ARMI.StoreInstruction(block, instr.dest, new RealRegister(`fp, #-${4*(cfg._armRegistersUsed.length + cfg._stackVarIndex + spillIndex + 2)}`)));
      }
    }
  }
}

function allocateRegisters(cfg) {
  const interferenceGraph = buildInterferenceGraph(cfg);
  let [coloring, spills, used] = colorGraph(interferenceGraph, availableRegisters);
  cfg._spills = {};
  cfg._spillCount = spills.length;
  let spillIndex = 0;
  for (const spill of spills) {
    cfg._spills[spill[0]] = new Spill(spillIndex++);
  }
  cfg._armRegistersUsed = used.concat(['r9', 'r10']);
  assignRealRegisters(cfg, coloring);
}

function translateAll(cfgs) {
  for (const func of cfgs.functions) {
    translate(func);
    allocateRegisters(func);
  }
  cfgs.toString = ARMString;
}

module.exports = {
  translateAll
};
