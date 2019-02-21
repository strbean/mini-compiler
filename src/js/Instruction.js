'use strict';

const { Register, Immediate } = require('./Register');
let useOldSyntax;

function configure(opts) {
  useOldSyntax = opts.oldLlvm || opts.parent.oldLlvm;
}

class Instruction {
  constructor(block) {
    this.block = block;
  }

  value() {
    return undefined;
  }

  getUses() {
    return [];
  }

  rewriteRegister(register, value) {
    for (const key in this) {
      if (this.hasOwnProperty(key) && key !== 'dest' && this[key] === register) {
        this[key] = value;
        if (value instanceof Register && !value.used.includes(this)) {
          value.used.push(this);
        }
      }
    }
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
    return `${this.dest} = ${this.name} ${this.op1.type} ${this.op1}, ${this.op2}`;
  }

  computeValue(fn, registerValues) {
    let {op1, op2} = this;
    if (op1 instanceof Immediate) {
      op1 = op1.value;
    }
    if (op2 instanceof Immediate) {
      op2 = op2.value;
    }
    if (registerValues) {
      if (op1 instanceof Register) {
        op1 = registerValues[`${op1}`];
      }
      if (op2 instanceof Register) {
        op2 = registerValues[`${op2}`];
      }
    }
    if (typeof op1 === 'number' && typeof op2 === 'number') {
      return fn(op1, op2);
    }
  }
}

class AddInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'add', dest, op1, op2);
  }

  value(registerValues) {
    return this.computeValue((a, b) => a + b, registerValues);
  }
}

class MulInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'mul', dest, op1, op2);
  }

  value(registerValues) {
    return this.computeValue((a, b) => a * b, registerValues);
  }
}

class SDivInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'sdiv', dest, op1, op2);
  }

  value(registerValues) {
    return this.computeValue((a, b) => Math.floor(a / b), registerValues);
  }
}

class SubInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'sub', dest, op1, op2);
  }

  value(registerValues) {
    return this.computeValue((a, b) => a - b, registerValues);
  }
}

class AndInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'and', dest, op1, op2);
  }


  value(registerValues) {
    return this.computeValue((a, b) => (a && b) ? 1 : 0, registerValues);
  }
}

class OrInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'or', dest, op1, op2);
  }

  value(registerValues) {
    return this.computeValue((a, b) => (a || b) ? 1 : 0, registerValues);
  }
}

class XorInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'xor', dest, op1, op2);
  }

  value(registerValues) {
    return this.computeValue((a, b) => a ^ b, registerValues);
  }
}

class CmpInstruction extends Instruction {
  constructor(block, dest, cond, op1, op2) {
    super(block);
    this.dest = dest;
    this.cond = cond;
    this.op1 = op1;
    this.op2 = op2;
    this.ty = op1.type === 'null' ? op2.type : op1.type;
    if (this.ty === 'null') {
      this.ty = 'i8*';
    }
    dest.defined = this;
    op1.used.push(this);
    op2.used.push(this);
  }

  getUses() {
    return [this.op1, this.op2];
  }

  value(registerValues) {
    let {op1, op2, cond} = this;
    if (op1 instanceof Immediate) {
      op1 = op1.value;
    }
    if (op2 instanceof Immediate) {
      op2 = op2.value;
    }
    if (registerValues) {
      if (op1 instanceof Register) {
        op1 = registerValues[`${op1}`];
      }
      if (op2 instanceof Register) {
        op2 = registerValues[`${op1}`];
      }
    }
    if (!isNaN(op1) && !isNaN(op2)) {
      let val1 = op1, val2 = op2;
      switch (cond) {
        case 'eq':
          return val1 === val2 ? 1 : 0;
        case 'ne':
          return val1 !== val2 ? 1 : 0;
        case 'ugt':
        case 'sgt':
          return val1 > val2 ? 1 : 0;
        case 'uge':
        case 'sge':
          return val1 >= val2 ? 1 : 0;
        case 'ult':
        case 'slt':
          return val1 < val2 ? 1 : 0;
        case 'ule':
        case 'sle':
          return val1 <= val2 ? 1 : 0;
      }
    }
  }

  toString() {
    return `${this.dest} = icmp ${this.cond} ${this.ty} ${this.op1}, ${this.op2}`;
  }
}

class BranchInstruction extends Instruction {
  constructor(block, to) {
    super(block);
    this.to = to;
  }

  rewriteBlock(before, after) {
    if (this.to === before) {
      this.to = after;
    }
  }

  toString() {
    return `br label %${this.to.label}`;
  }
}

class CBranchInstruction extends BranchInstruction {
  constructor(block, cond, iftrue, iffalse) {
    super(block, null);
    this.cond = cond;
    this.iftrue = iftrue;
    this.iffalse = iffalse;
    cond.used.push(this);
  }

  rewriteBlock(before, after) {
    if (this.iffalse === before) {
      this.iffalse = after;
    }
    if (this.iftrue === before) {
      this.iftrue = after;
    }
  }

  hasDuplicatedDestinations() {
    return this.iftrue === this.iffalse;
  }

  toUnconditional() {
    this.cond.used = this.cond.used.filter(use => use !== this);
    return new BranchInstruction(this.block, this.iftrue);
  }

  toString() {
    return `br i1 ${this.cond}, label %${this.iftrue.label}, label %${this.iffalse.label}`;
  }
}

class LoadInstruction extends Instruction {
  constructor(block, dest, pointer) {
    super(block);
    this.dest = dest;
    this.pointer = pointer;
    dest.defined = this;
    pointer.used.push(this);
  }

  toString() {
    return useOldSyntax ?
      `${this.dest} = load ${this.dest.type}* ${this.pointer}` :
      `${this.dest} = load ${this.dest.type}, ${this.dest.type}* ${this.pointer}`;
  }
}

class StoreInstruction extends Instruction {
  constructor(block, value, pointer) {
    super(block);
    this.val = value;
    this.pointer = pointer;
    value.used.push(this);
    pointer.used.push(this);
  }

  toString() {
    return `store ${this.pointer.type} ${this.val}, ${this.pointer.type}* ${this.pointer}`;
  }
}

class GEPInstruction extends Instruction {
  constructor(block, dest, ptrval, index) {
    super(block);
    this.dest = dest;
    this.ptrval = ptrval;
    this.index = index;
    dest.defined = this;
    ptrval.used.push(this);
  }

  toString() {
    const {ptrval, index, dest} = this;
    const ty = ptrval.type;
    return useOldSyntax ?
      `${dest} = getelementptr ${ty} ${ptrval}, i1 0, i32 ${index}` :
      `${dest} = getelementptr ${ty.substring(0, ty.length - 1)}, ${ty} ${ptrval}, i1 0, i32 ${index}`;
  }
}

/*
<result> = call <ty> <fnptrval>(<function args>)
ret void
ret <ty> <value>
*/

class CallInstruction extends Instruction {
  constructor(block, dest, fnptrval, ...args) {
    super(block);
    this.dest = dest;
    this.fnptrval = fnptrval;
    this.args = args;
    if (dest instanceof Register) {
      dest.defined = this;
    }
    for (const arg of args) {
      arg.used.push(this);
    }
  }

  rewriteRegister(register, value) {
    const {args} = this;
    for (let i = 0; i < args.length; i++) {
      if (args[i] === register) {
        args[i] = value;
        if (value instanceof Register && !value.used.includes(this)) {
          value.used.push(this);
        }
      }
    }
  }

  toString() {
    let argString = this.args.map(arg => `${arg.type} ${arg}`).join(', ');
    if (this.dest instanceof Register) {
      return `${this.dest} = call ${this.dest.type} ${this.fnptrval}(${argString})`;
    } else {
      return `call ${this.dest} ${this.fnptrval}(${argString})`;
    }
  }
}

class CallReadInstruction extends Instruction {
  constructor(block, dest) {
    super(block);
    this.dest = dest;
    dest.used.push(this);
  }

  toString() {
    return useOldSyntax ?
      `call i32 (i8*, ...)* @scanf(i8* getelementptr inbounds ([4 x i8]* @.read, i32 0, i32 0), i32* ${this.dest})` :
      `call i32 (i8*, ...) @scanf(i8* getelementptr inbounds ([4 x i8], [4 x i8]* @.read, i32 0, i32 0), i32* ${this.dest})`;
  }
}

class CallPrintInstruction extends Instruction {
  constructor(block, val, endl) {
    super(block);
    this.val = val;
    this.endl = endl;
    val.used.push(this);
  }

  toString() {
    return useOldSyntax ?
      'call i32 (i8*, ...)* @printf(i8* getelementptr inbounds '
      + `([5 x i8]* ${this.endl ? '@.println' : '@.print'}, i32 0, i32 0), i32 ${this.val})` :
      'call i32 (i8*, ...) @printf(i8* getelementptr inbounds '
      + `([5 x i8], [5 x i8]* ${this.endl ? '@.println' : '@.print'}, i32 0, i32 0), i32 ${this.val})`;
  }
}

class RetInstruction extends Instruction {
  constructor(block, val) {
    super(block);
    this.val = val;
    val && val.used.push(this);
  }

  getUses() {
    return (this.val !== undefined) ? [this.val] : [];
  }

  toString() {
    return this.val ? `ret ${this.val.type} ${this.val}` : 'ret void';
  }
}

/*
<result> = alloca <ty>
*/

class AllocaInstruction extends Instruction {
  constructor(block, dest, ty) {
    super(block);
    this.dest = dest;
    this.ty = ty;
    dest.defined = this;
  }

  toString() {
    return `${this.dest} = alloca ${this.dest.type}`;
  }
}

/*
<result> = bitcast <ty> <value> to <ty2> ; cast type
<result> = trunc <ty> <value> to <ty2> ; truncate to ty2
<result> = zext <ty> <value> to <ty2> ; zero-extend to ty2
 */

class CastInstruction extends Instruction {
  constructor(block, name, dest, value) {
    super(block);
    this.name = name;
    this.dest = dest;
    this.op = value;
    dest.defined = this;
    value.used.push(this);
  }

  computeValue(fn, registerValues) {
    let {op} = this;
    if (op instanceof Immediate) {
      op = op.value;
    }
    if (registerValues) {
      if (op instanceof Register) {
        op = registerValues[`${op}`];
      }
    }
    if (typeof op === 'number') {
      return fn(op);
    }
  }

  toString() {
    return `${this.dest} = ${this.name} ${this.op.type} ${this.op} to ${this.dest.type}`;
  }
}

class BitCastInstruction extends CastInstruction {
  constructor(block, dest, value) {
    super(block, 'bitcast', dest, value);
  }

  value(registerValues) {
    return this.computeValue((a) => a, registerValues);
  }
}

class TruncInstruction extends CastInstruction {
  constructor(block, dest, value) {
    super(block, 'trunc', dest, value);
  }

  value(registerValues) {
    return this.computeValue((a) => a & 1, registerValues);
  }
}

class ZExtInstruction extends CastInstruction {
  constructor(block, dest, value) {
    super(block, 'zext', dest, value);
  }

  value(registerValues) {
    return this.computeValue((a) => a, registerValues);
  }
}

class PhiInstruction extends Instruction {
  constructor(block, dest, id, ...incoming) {
    super(block);
    this.dest = dest;
    this.id = id;
    this.incoming = incoming;
    this.complete = false;
    dest.defined = this;
    for (const {register} of incoming) {
      register.used.push(this);
    }
  }

  push(incoming) {
    this.incoming.push(incoming);
    const {register} = incoming;
    if (register instanceof Register && !register.used.includes(this)) {
      register.used.push(this);
    }
  }

  rewriteRegister(register, value) {
    const {incoming} = this;
    for (let i = 0; i < incoming.length; i++) {
      if (incoming[i].register === register) {
        incoming[i].register = value;
        if (value instanceof Register && !value.used.includes(this)) {
          value.used.push(this);
        }
      }
    }
  }

  getUses() {
    return this.incoming.map(inc => inc.register);
  }

  toString() {
    const {dest, id, incoming, complete} = this;
    if (!complete) {
      return `${dest} = phi ${dest.type} INCOMPLETE\t\t; ${id}`;
    }
    return `${dest} = phi ${dest.type} ${incoming.map(({register, label}) => `[${register}, %${label}]`).join(', ')}\t\t; ${id}`; //TODO
  }
}

module.exports = {
  configure,
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
};
