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

module.exports = { Register, Immediate };
