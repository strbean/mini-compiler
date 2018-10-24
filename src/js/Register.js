'use strict';

class Register {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
  toString() {
    return this.name;
  }
}

class Immediate {
  constructor(type, value) {
    this.type = type;
    this.value = value;
  }
  toString() {
    return `${this.value}`;
  }
}

module.exports = { Register, Immediate };
