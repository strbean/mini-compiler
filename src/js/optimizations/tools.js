'use strict';
const {Register} = require('../Register');

function getAllPhiRegisters({ blockList }) {
  const registers = [];
  for (const {phis} of blockList) {
    for (const phi of phis) {
      registers.push(phi.dest);
    }
  }
  return registers;
}

function getAllNormalRegisters({ blockList }) {
  const registers = [];
  for (const {ll} of blockList) {
    for (const instruction of ll) {
      if (instruction.dest instanceof Register) {
        registers.push(instruction.dest);
      }
    }
  }
  return registers;
}
function getAllRegisters(cfg) {
  return getAllPhiRegisters(cfg).concat(getAllNormalRegisters(cfg));
}

module.exports = {
  getAllPhiRegisters,
  getAllNormalRegisters,
  getAllRegisters
};
