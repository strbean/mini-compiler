'use strict';

module.exports = {
  CFGCleanup: require('./optimizations/CFGCleanup'),
  SSCP: require('./optimizations/SSCP'),
  SSAUnusedResult: require('./optimizations/SSAUnusedResult'),
};
