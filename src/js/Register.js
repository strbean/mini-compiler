'use strict';

class Register {
  constructor(type, name) {
    this.type = type;
    this.name = name;
    this.used = [];
  }

  toString() {
    return this.name;
  }
}

class Global {
  constructor(block, name) {
    this.block = block;
    this.name = name.split('g.').pop();
    this.used = [];
  }

  toString() {
    return `.${this.block.label}_${this.name}`;
  }
}

class RealRegister {
  constructor(name) {
    this.name = name;
    this.used = [];
  }
  toString() {
    return this.name;
  }
}

class StackVar {
  constructor(cfg, index) {
    this.cfg = cfg;
    this.index = index;
    this.used = [];
  }

  toString() {
    return `fp, #-${this.offsetString()}`;
  }

  offsetString() {
    return `${4*(this.cfg._armRegistersUsed.length + this.index+2)}`;
  }
}

class Immediate {
  constructor(type, value) {
    this.type = type;
    this.value = type == 'null' ? value : parseInt(value);
    this.used = [];
  }

  toString() {
    return `${this.value}`;
  }
}

class RealImmediate extends Immediate {
  constructor(val) {
    super('i32', val);
  }

  toString() {
    return `#${this.value}`;
  }
}

class Spill {
  constructor(index) {
    this.index = index;
  }
}

module.exports = { Register, RealRegister, Global, StackVar, Immediate, RealImmediate, Spill };
