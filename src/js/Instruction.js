'use strict';

const { Register, Immediate } = require('./Register');

class Instruction {
  constructor(block) {
    this.block = block;
  }
}

class ArithmeticInstruction extends Instruction {
  constructor(block, name, dest, op1, op2) {
    super(block);
    this.name = name;
    this.dest = dest;
    this.op1 = op1;
    this.op2 = op2;
  }
  toString() {
    return `${this.dest} = ${this.name} i32 ${this.op1}, ${this.op2}`;
  }
}

class AddInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'add', dest, op1, op2);
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

class SubInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'sub', dest, op1, op2);
  }
}

class AndInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'and', dest, op1, op2);
  }
}

class OrInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'or', dest, op1, op2);
  }
}

class XorInstruction extends ArithmeticInstruction {
  constructor(block, dest, op1, op2) {
    super(block, 'xor', dest, op1, op2);
  }
}

class CmpInstruction extends Instruction {
  constructor(block, dest, cond, op1, op2) {
    super(block);
    this.dest = dest;
    this.cond = cond;
    this.op1 = op1;
    this.op2 = op2;
  }
  toString() {
    return `${this.dest} = icmp ${this.cond} ${this.op1.type} ${this.op1}, ${this.op2}`;
  }
}
class BranchInstruction extends Instruction {
  constructor(block, dest) {
    super(block);
    this.dest = dest;
  }
  toString() {
    return `br label %${this.dest}`;
  }
}

class CBranchInstruction extends BranchInstruction {
  constructor(block, cond, iftrue, iffalse) {
    super(block, null);
    this.cond = cond;
    this.iftrue = iftrue;
    this.iffalse = iffalse;
  }
  toString() {
    return `br i1 ${this.cond}, label %${this.iftrue}, label %${this.iffalse}`;
  }
}

class LoadInstruction extends Instruction {
  constructor(block, dest, pointer) {
    super(block);
    this.dest = dest;
    this.pointer = pointer;
  }
  toString() {
    return `${this.dest} = load ${this.dest.type}* ${this.pointer}`;
  }
}

class StoreInstruction extends Instruction {
  constructor(block, value, pointer) {
    super(block);
    this.value = value;
    this.pointer = pointer;
  }
  toString() {
    return `store ${this.value.type} ${this.value}, ${this.pointer.type}* ${this.pointer}`;
  }
}

class GEPInstruction extends Instruction {
  constructor(block, dest, ptrval, index) {
    super(block);
    this.dest = dest;
    this.ptrval = ptrval;
    this.index = index;
  }
  toString() {
    return `${this.dest} = getelementptr ${this.ptrval.type} ${this.ptrval}, i1 0, i32 ${this.index}`;
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
  }
  toString() {
    return `call i32 (i8*, ...)* @scanf(i8* getelementptr inbounds ([4 x i8]* @.read, i32 0, i32 0), i32* ${this.dest})`;
  }
}

class CallPrintInstruction extends Instruction {
  constructor(block, val, endl) {
    super(block);
    this.val = val;
    this.endl = endl;
  }
  toString() {
    return 'call i32 (i8*, ...)* @printf(i8* getelementptr inbounds'
      + `([5 x i8]* ${this.endl ? '@.println' : '@.print'}, i32 0, i32 0), i32 ${this.val})`;
  }
}

class RetInstruction extends Instruction {
  constructor(block, val) {
    super(block);
    this.val = val;
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
  }
  toString() {
    return `${this.dest} = alloca ${this.ty}`;
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
    this.value = value;
  }
  toString() {
    return `${this.dest} = ${this.name} ${this.value.type} ${this.value} to ${this.dest.type}`;
  }
}

class BitCastInstruction extends CastInstruction {
  constructor(block, dest, value) {
    super(block, 'bitcast', dest, value);
  }
}

class TruncInstruction extends CastInstruction {
  constructor(block, dest, value) {
    super(block, 'trunc', dest, value);
  }
}

class ZExtInstruction extends CastInstruction {
  constructor(block, dest, value) {
    super(block, 'zext', dest, value);
  }
}

class PhiInstruction extends Instruction {
  constructor (block, dest, id, ...incoming) {
    super(block);
    this.dest = dest;
    this.id = id;
    this.incoming = incoming;
    this.complete = false;
  }
  toString() {
    const {dest, id, incoming, complete} = this;
    if (!complete) {
      return `${dest} = phi ${dest.type} INCOMPLETE\t\t; ${id}`;
    }
    return `${dest} = phi ${dest.type} ${incoming.map(({register, label}) => `[${register}, %${label}]`).join(',')}\t\t; ${id}`; //TODO
  }
}

module.exports = {
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
