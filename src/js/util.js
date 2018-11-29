'use strict';

const nativeTypes = ['int', 'bool', 'void'];
const statementRules = ['if', 'while', 'block', 'print', 'return', 'assign', 'delete', 'invocation'];
const expressionRules = ['invocation', 'dot', 'unary', 'binary', 'id', 'num', 'true', 'false', 'new', 'null'];
const branchingStatements = ['if', 'while', 'return'];

function buildSymbolDicts(ast) {
  const symbols = {
    structs: {},
    globals: {},
    functions: {},
  };
  for (const { id, fields } of ast.types) {
    let fieldDict = symbols.structs[id] = [];
    let i = 0;
    for (const {id, type} of fields) {
      fieldDict.push(type);
      fieldDict[id] = {type, index: i++}; // this is awful
    }
  }

  for (const { id, type } of ast.declarations) {
    symbols.globals[id] = type;
  }

  for (const { id, parameters, return_type, declarations } of ast.functions) {
    let funcDict = symbols.functions[id] = {
      parameters: {},
      parameterList: [],
      declarations: {},
      return_type
    };
    let i = 0;
    for (const {id, type} of parameters) {
      funcDict.parameters[id] = type;
      funcDict.parameterList[i++] = type;
    }

    for (const {id, type} of declarations) {
      funcDict.declarations[id] = type;
    }
  }
  return symbols;
}

module.exports = {
  buildSymbolDicts,
  nativeTypes,
  statementRules,
  expressionRules,
  branchingStatements
};
