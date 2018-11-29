'use strict';
const { Register, Immediate } = require('../Register');
const { LLVM } = require('../Generate');

/*eslint-disable no-unused-vars*/
const {
  ArithmeticInstruction,
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
} = require('../Instruction');
/*eslint-enable no-unused-vars*/

const TOP = 'TOP';
const BOTTOM = 'BOTTOM';

function initValue(instruction) {
  if (instruction instanceof CallInstruction) {
    return BOTTOM;
  } else if (instruction instanceof LoadInstruction) {
    return BOTTOM;
  }
  let val = instruction.value();
  if (val !== undefined) {
    return val;
  }
  return TOP;
}

function value(instruction, registerValues) {
  const vals = instruction.getUses().map(reg => (reg instanceof Register) ? registerValues[`${reg}`] : reg.value);
  if (instruction instanceof PhiInstruction) {
    if (vals.includes(BOTTOM)) {
      return BOTTOM;
    }
    let consts = vals.filter(val => val !== TOP);
    if (consts.length === 1) {
      return consts[0];
    }

    if (consts.length > 1) {
      if (consts.every(val => val === consts[0])) {
        return consts[0];
      } else {
        return BOTTOM;
      }
    }

    return TOP;
  } else {
    if (!vals.length) {
      // TODO: is this right?
      return BOTTOM;
    }

    if (vals.includes(BOTTOM)) {
      return BOTTOM;
    }

    if (vals.includes(TOP)) {
      return TOP;
    }
  }

  return instruction.value(registerValues);
}

function buildWorkList(allRegisters, registerValues) {
  let workList = [];
  for (const register of allRegisters) {
    if (registerValues[`${register}`] !== TOP) {
      workList.push(register);
    }
  }
  return workList;
}

function rewriteRegister(register, val) {
  let use;
  // extra parens here shuts up eslint and seems like a reasonable way to say "yes I mean to assign here"
  while ( (use = register.used.pop()) ) {
    use.rewriteRegister(register, new Immediate(register.type, val));
  }
}

function rewrite(cfg, allRegisters, registerValues) {
  for (const register of allRegisters) {
    const val = registerValues[`${register}`];
    if (isFinite(val)) {
      rewriteRegister(register, val);
    }
  }
}

function SSCP(cfg) {
  let allRegisters = [];
  let registerValues = {};

  // first pass
  for (const param of cfg.parameters) {
    registerValues[LLVM.parameterName(param.id)] = BOTTOM;
  }

  for (const {phis, ll} of cfg.blockList) {
    for (const phi of phis) {
      allRegisters.push(phi.dest);
      registerValues[`${phi.dest}`] = TOP;
    }
    for (const instruction of ll) {
      if (instruction.dest instanceof Register) {
        allRegisters.push(instruction.dest);
        registerValues[`${instruction.dest}`] = initValue(instruction, registerValues);
      }
    }
  }

  let workList = buildWorkList(allRegisters, registerValues);
  //let previousLength = workList.length;
  while(workList.length) {
    const register = workList.pop();
    for (const use of register.used) {
      if (!('dest' in use) || !(use.dest instanceof Register)) continue;
      const m = use.dest;
      const t = registerValues[`${m}`];
      if (t !== BOTTOM) {
        const t_ = registerValues[`${m}`] = value(m.defined, registerValues);
        if (t !== t_) {
          if (!workList.includes(m)) {
            workList.push(m);
          }
        }
      }
    }
  }
  rewrite(cfg, allRegisters, registerValues);
}

module.exports = SSCP;
