'use strict';

const I = require('../Instruction');
//const {Immediate} = require('../Register');

function mergeBlocks(parent, child) {
  parent.successors = child.successors;

  for (const succ of child.successors) {
    succ.predecessors = succ.predecessors.map(pred => pred === child ? parent : pred);
    for (const phi of succ.phis) {
      phi.incoming.find(({label}) => label === child.label).label = parent.label;
    }
  }

  parent.ll = parent.ll.filter(instr => !(instr instanceof I.BranchInstruction));
  parent.ll = parent.ll.concat(child.ll);
  //parent.phis.concat(child.phis);
}

/*
function isEqualValue(r1, r2) {
  if (r1 === r2) {
    return true;
  }

  if (r1.name === r2.name) {
    throw new Error(`BUG: Duplicate register objects representing same register named '${r1.name}'`);
    //return true;
  }

  if (r1 instanceof Immediate && r2 instanceof Immediate) {
    return r1.value === r2.value;
  }

  return false;
}

function hasCodependentPhis(block, otherBlocks) {
  const child = block.successors[0];
  for (const phi in child.phis) {
    const blockValue = phi.incoming.find(({label}) => label === block.label).register;
    const codependents = phi.incoming.filter(({label}) => otherBlocks.some(otherBlock => label === otherBlock.label));
    if (codependents.some(({register}) => !isEqualValue(blockValue, register))) {
      return true;
    }
  }
  return false;
}
*/

function cleanup(cfg) {
  // dead blocks
  for (let i = 0; i < cfg.blockList.length; i++) {
    const block = cfg.blockList[i];
    if (block.special) {
      continue;
    }
    if (!block.predecessors.length) {
      for (const child of block.successors) {
        child.predecessors = child.predecessors.filter(val => val !== block);
      }
      cfg.blockList.splice(i, 1);
      i--;
    }
  }

  // straight through
  for (let i = 0; i < cfg.blockList.length; i++) {
    const block = cfg.blockList[i];
    if (block.predecessors.length === 1 && block.predecessors[0].successors.length === 1) {
      const parent = block.predecessors[0];
      if (block !== cfg.exit && parent !== cfg.entry) {
        mergeBlocks(parent, block);
        cfg.blockList = cfg.blockList.filter(_block => _block !== block);
        i--;
      }
    }
  }

  // redundant branch
  for (let i = 0; i < cfg.blockList.length; i++) {
    const block = cfg.blockList[i];
    if (block.successors.length === 2 && block.successors[0] === block.successors[1]) {
      const child = block.successors[0];
      const br = block.ll[block.ll.length - 1];
      const cmp = br.cond.defined;
      block.ll = block.ll.filter(instr => instr !== br && instr !== cmp);
      block.ll.push(new I.BranchInstruction(block, child));
      block.successors = [child];
      child.predecessors = child.predecessors.filter(pred => pred !== block);
      child.predecessors.push(block);
    }
  }

  // empty blocks
  for (let i = 0; i < cfg.blockList.length; i++) {
    const block = cfg.blockList[i];
    if (block.special
      || block.ll.length !== 1
      || block.successors.length !== 1
      || block.phis.length
      || block.successors[0].phis.length) {
      continue;
    }

    const child = block.successors[0];
    for (const pred of block.predecessors) {
      child.predecessors = child.predecessors.map(_pred => _pred === block ? pred : _pred);
      if (!child.predecessors.includes(pred)) {
        child.predecessors.push(pred);
      }
      pred.successors = pred.successors.map(succ => succ === block ? child : succ);
      pred.ll[pred.ll.length - 1].rewriteBlock(block, child);
    }

    cfg.blockList = cfg.blockList.filter(_block => _block !== block);
    i--;
  }

  return cfg.blockList.length;
}

function CFGCleanup(cfg) {
  let oldBlockCount;
  let newBlockCount = cfg.blockList.length;

  do {
    oldBlockCount = newBlockCount;
    cleanup(cfg);
    newBlockCount = cleanup(cfg);
  } while(oldBlockCount !== newBlockCount);
}

module.exports = CFGCleanup;
