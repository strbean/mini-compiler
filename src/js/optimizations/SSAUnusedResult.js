'use strict';
//const { Register, Immediate } = require('../Register');
//const { LLVM } = require('../Generate');
const tools = require('./tools');

function SSAUnusedResult(cfg) {
  const registers = tools.getAllRegisters(cfg);

  for (const register of registers) {
    if (!register.used.length) {
      const instruction = register.defined;
      if (instruction) {
        for (const block of cfg.blockList) {
          block.phis = block.phis.filter(instr => instr !== instruction);
          block.ll = block.ll.filter(instr => instr !== instruction);
        }
      }
    }
  }
}

module.exports = SSAUnusedResult;
