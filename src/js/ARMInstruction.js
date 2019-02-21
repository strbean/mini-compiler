'use strict';

const { StackVar, RealImmediate, Global } = require('./Register');

class Instruction {
  constructor(block) {
    this.block = block;
  }

  rewriteRegister(register, value) {
    for (const key in this) {
      if (this.hasOwnProperty(key) && key !== 'dest' && this[key] === register) {
        this[key] = value;
      }
    }
  }

  getUses() {
    return [];
  }
}

class ArithmeticInstruction extends Instruction {
  constructor(block, name, dest, op1, op2) {
    super(block);
    this.name = name;
    this.dest = dest;
    this.op1 = op1;
    this.op2 = op2;
    dest.defined = this;
    op1.used.push(this);
    op2.used.push(this);
  }

  getUses() {
    return [this.op1, this.op2];
  }

  toString() {
    return `${this.name} ${this.dest}, ${this.op1}, ${this.op2}`;
  }
}

class AddInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'add', dest, op1, op2);
  }
}

class SubInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'sub', dest, op1, op2);
  }
}

class MulInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'mul', dest, op1, op2);
  }
}

class SDivInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'sdiv', dest, op1, op2);
  }
}

class AndInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'and', dest, op1, op2);
  }
}

class OrrInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'orr', dest, op1, op2);
  }
}

class EorInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'eor', dest, op1, op2);
  }
}

class CmpInstruction extends Instruction {
  constructor(block, op1, op2) {
    super(block);
    this.op1 = op1;
    this.op2 = op2;
    op1.used.push(this);
    op2.used.push(this);
  }

  getUses() {
    return [this.op1, this.op2];
  }

  toString() {
    const {op1, op2} = this;
    return `cmp ${op1}, ${op2}`;
  }
}

class BranchInstruction extends Instruction {
  constructor(block, to, condition) {
    super(block);
    this.to = to;
    this.condition = condition || '';
  }

  toString() {
    const { condition, to } = this;
    return `b${condition} .${to.label}`;
  }
}

class BranchLInstruction extends BranchInstruction {
  constructor(block, to, condition, ...uses) {
    super(block, to, condition);
    this.uses = uses;
  }

  getUses() {
    return this.uses;
  }

  toString() {
    const { condition, to } = this;
    return `bl${condition} ${to}`;
  }
}

class MovInstruction extends Instruction {
  constructor(block, dest, op, condition) {
    super(block);
    this.dest = dest;
    this.op = op;
    this.condition = condition || '';
    dest.defined = this;
    op.used.push(this);
  }

  getUses() {
    return [this.op];
  }

  toString() {
    const {condition, dest, op} = this;
    return `mov${condition} ${dest}, ${op}`;
  }
}

class LoadInstruction extends Instruction {
  constructor(block, dest, op) {
    super(block);
    this.dest = dest;
    this.op = op;
    dest.defined = this;
    op.used.push(this);
  }

  getUses() {
    return [this.op];
  }

  toString() {
    const {dest, op} = this;
    let fromStr;
    if (op instanceof RealImmediate) {
      fromStr = `=${op.value}`;
    } else if (op instanceof Global) {
      fromStr = `${op}`;
    } else {
      fromStr = `[${op}]`;
    }
    return `ldr ${dest}, ${fromStr}`;
  }
}

class StoreInstruction extends Instruction {
  constructor(block, op, ptr) {
    super(block);
    this.op = op;
    this.ptr = ptr;
    op.used.push(this);
    ptr.used.push(this);
  }

  getUses() {
    return [this.op, this.ptr];
  }

  toString() {
    const {op, ptr} = this;
    return `str ${op}, [${ptr}]`;
  }
}

class PushInstruction extends Instruction {
  constructor(block, ...registers) {
    super(block);
    this.registers = registers;
    for (const register of registers) {
      register.used.push(this);
    }
  }

  getUses() {
    return this.registers;
  }

  toString() {
    const {registers} = this;
    return `push {${registers.join(', ')}}`;
  }
}

class PopInstruction extends Instruction {
  constructor(block, ...registers) {
    super(block);
    this.registers = registers;
    for (const register of registers) {
      register.defined = this;
    }
  }

  toString() {
    const {registers} = this;
    return `pop {${registers.join(', ')}}`;
  }
}

class CallReadInstruction extends Instruction {
  constructor(block, dest) {
    super(block);
    this.dest = dest;
    dest.defined = this;
  }

  toString() {
    const { dest } = this;
    if (dest instanceof StackVar) {
      return 'mov r1, fp' +
        `\n\tsub r1, #${dest.offsetString()}` +
        '\n\tmovw r0, #:lower16:.READ_FMT' +
        '\n\tmovt r0, #:upper16:.READ_FMT' +
        '\n\tbl scanf';
    } else {
      return 'movw r1, #:lower16:.read_scratch' +
        '\n\tmovt r1, #:upper16:.read_scratch' +
        '\n\tmovw r0, #:lower16:.READ_FMT' +
        '\n\tmovt r0, #:upper16:.READ_FMT' +
        '\n\tbl scanf' +
        `\n\tmovw ${dest}, #:lower16:.read_scratch` +
        `\n\tmovt ${dest}, #:upper16:.read_scratch`;
    }
  }
}

class CallPrintInstruction extends Instruction {
  constructor(block, val, endl) {
    super(block);
    this.val = val;
    this.endl = endl;
  }

  getUses() {
    return [this.val];
  }

  toString() {
    let { val, endl } = this;
    let format = endl ? '.PRINTLN_FMT' : '.PRINT_FMT';

    return `mov r1, ${val}` +
    `\n\tmovw r0, #:lower16:${format}` +
    `\n\tmovt r0, #:upper16:${format}` +
    '\n\tbl printf';
  }
}

module.exports = {
  Instruction,
  ArithmeticInstruction,
  AddInstruction,
  SubInstruction,
  MulInstruction,
  SDivInstruction,
  AndInstruction,
  OrrInstruction,
  EorInstruction,
  CmpInstruction,
  BranchInstruction,
  BranchLInstruction,
  MovInstruction,
  StoreInstruction,
  LoadInstruction,
  PushInstruction,
  PopInstruction,
  CallReadInstruction,
  CallPrintInstruction,
};
