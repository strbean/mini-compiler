'use strict';
//const util = require('util');

const nativeTypes = ['int', 'bool', 'void'];
const statementRules = ['if', 'while', 'block', 'print', 'return', 'assign', 'delete', 'invocation'];
const expressionRules = ['invocation', 'dot', 'unary', 'binary', 'id', 'num', 'true', 'false', 'new', 'null'];
const unaryOperators = { '-': 'int', '!': 'bool' };
const binaryOperatorAccepts = {
  'int': ['*', '/', '+', '-', '<', '<=', '>', '>='],
  'bool': ['&&', '||'],
  'any': ['==', '!=']
};

const binaryOperatorReturns = {
  '*': 'int',
  '/': 'int',
  '+': 'int',
  '-': 'int',
  '<': 'bool',
  '<=': 'bool',
  '>': 'bool',
  '>=': 'bool',
  '&&': 'bool',
  '||': 'bool',
  '==': 'bool',
  '!=': 'bool'
};

function TypeChecker(opts) {
  this.opts = opts;
  this.errs = [];
  this.warnings = [];
}

TypeChecker.prototype.warn = function warn(name, text) {
  if (this.opts.Wall || this.parent.opts.Wall || this.opts[name] || this.opts.parent[name]) {
    this.warnings.push(text);
  }
}

TypeChecker.prototype.check = function check(ast) {
  let ns = {
    globals: {},
    structs: {},
    functions: {}
  };

  for (let {id, fields, line} of ast.types) {
    let structId = id;
    if (id in ns.structs) {
      this.errs.push(`${line}: Redeclaration of struct '${id}'`);
    }
    let fieldsDict = ns.structs[id] = {};
    for (let {id, type, line} of fields) {
      if (id in fieldsDict) {
        this.errs.push(`${line}: Redeclaration of field '${structId}.${id}'`);
      }
      if (!(nativeTypes.includes(type)) && !(type in ns.structs)) {
        this.errs.push(`${line}: Unknown type '${type}' for field '${structId}.${id}'`);
      }
      fieldsDict[id] = type;
    }
  }

  for (let {id, type, line} of ast.declarations) {
    if (id in ns.globals) {
      this.errs.push(`${line}: Redeclaration of global variable '${id}'`);
    }
    if (!(nativeTypes.includes(type)) && !(type in ns.structs)) {
      this.errs.push(`${line}: Unknown type '${type}' for variable '${id}'`);
    }
    ns.globals[id] = type;
  }

  for (let {id, return_type, parameters} of ast.functions) {
    ns.functions[id] = {
      return_type,
      parameters
    };
  }

  for (let func of ast.functions) {
    this.checkFunction(func, ns);
  }
  if (!('main' in ns.functions)) {
    this.errs.push('No main() found');
  } else if (ns.functions.main['return_type'] !== 'int' || ns.functions.main.parameters.length !== 0) {
    this.errs.push('main() must return \'int\' and have no parameters');
  }

  return this.errs;
};

TypeChecker.prototype.checkFunction = function checkFunction(func, ns) {
  ns.locals = {};
  for (let {id, type, line} of func.parameters) {
    if (id in ns.locals) {
      this.errs.push(`${func.id}():${line}: Redeclaration of parameter '${id}'`);
    }
    if (!(nativeTypes.includes(type)) && !(type in ns.structs)) {
      this.errs.push(`${func.id}():${line}: Unknown type '${type}' for parameter '${id}'`);
    }
    ns.locals[id] = type;
  }
  for (let {id, type, line} of func.declarations) {
    if (id in ns.locals) {
      this.errs.push(`${func.id}():${line}: Redeclaration of variable or parameter '${id}'`);
    }
    if (!(nativeTypes.includes(type)) && !(type in ns.structs)) {
      this.errs.push(`${func.id}():${line}: Unknown type '${type}' for variable '${id}'`);
    }
    ns.locals[id] = type;
  }
  this.checkStatements(func.body, func.return_type, ns);
};

TypeChecker.prototype.checkStatements = function checkStatements(statements, return_type, ns) {
  for (let statement of statements) {
    this.checkStatement(statement, return_type, ns);
  }
};

TypeChecker.prototype.checkStatement = function checkStatement(statement, return_type, ns) {
  let { line, stmt } = statement;
  if (!(statementRules.includes(stmt))) {
    throw new Error(`${line}: (PARSER ERROR) Unknown statement type: ${stmt}`);
  }
  this[`check${stmt}`].call(this, statement, return_type, ns);
};

TypeChecker.prototype.checkExpression = function checkExpression(expression, ns) {
  let { line, exp } = expression;
  if (exp === 'read') {
    return 'int';
  }
  if (!(expressionRules.includes(exp))) {
    throw new Error(`${line}: (PARSER ERROR) Unknown expression type: ${exp}`);
  }
  return this[`check${exp}`].call(this, expression, ns);
};

TypeChecker.prototype.checkGuard = function checkGuard(guard, ns) {
  let guardType = this.checkExpression(guard, ns);
  let { line } = guard;
  if (guardType !== 'bool') {
    this.errs.push(`${line}: Non-boolean guard for if statement (got '${guardType}')`);
  }
};

TypeChecker.prototype.checkif = function checkif(statement, return_type, ns) {
  let { guard, then } = statement;
  let _else = statement['else'];
  this.checkGuard(guard, ns);
  this.checkStatement(then, return_type, ns);
  if (_else) {
    this.checkStatement(_else, return_type, ns);
  }
};

TypeChecker.prototype.checkwhile = function checkwhile(statement, return_type, ns) {
  let { guard, body } = statement;
  this.checkGuard(guard, ns);
  this.checkStatement(body, return_type, ns);
};

TypeChecker.prototype.checkblock = function checkblock({ list }, return_type, ns) {
  this.checkStatements(list, return_type, ns);
};

TypeChecker.prototype.checkprint = function checkprint({ exp, line }, return_type, ns) {
  let expType = this.checkExpression(exp, ns);
  if (expType && expType !== 'int') {
    this.errs.push(`${line}: Non-integer argument to print (got '${expType}')`);
  }
};

TypeChecker.prototype.checkreturn = function checkreturn({ line, exp }, return_type, ns) {
  let expType = exp ? this.checkExpression(exp, ns) : 'void';
  if (expType !== return_type) {
    this.errs.push(`${line}: Incorrect return type (got '${expType}', expected '${return_type}')`);
  }
};

TypeChecker.prototype.checkTarget = function checkTarget({line, id, left}, ns) {
  if (!left) {
    if (!(id in ns.locals) && !(id in ns.globals)) {
      this.errs.push(`${line}: Reference to undeclared variable '${id}'`);
    }
    return ns.locals[id] || ns.globals[id];
  } else {
    let leftType = this.checkTarget(left, ns);
    if (!(leftType in ns.structs)) {
      this.errs.push(`${line}: Attempt to access field '${id}' of non-struct type '${leftType}'`);
      return;
    }
    if (!(id in ns.structs[leftType])) {
      this.errs.push(`${line}: Attempt to access unknown field '${id}' of struct '${leftType}'`);
      return;
    }
    return ns.structs[leftType][id];
  }
};

TypeChecker.prototype.checkassign = function checkassign({ line, target, source }, return_type, ns) {
  let leftType = this.checkTarget(target, ns);
  let sourceType = this.checkExpression(source, ns);
  if (leftType !== sourceType && (nativeTypes.includes(leftType) || sourceType !== 'null')) {
    this.errs.push(`${line}: Attempt to assign value with type ${sourceType} to field/variable with type ${leftType}`);
  }
};

TypeChecker.prototype.checkdelete = function checkdelete({line, exp}, return_type, ns) {
  let expType = this.checkExpression(exp, ns);
  if (nativeTypes.includes(expType)) {
    this.errs.push(`${line}: Attempt to delete native type`);
  }
};

/* I think we can get away with the same function for expressions and statements... */
TypeChecker.prototype.checkinvocation = function checkinvocation({line, id, args}, return_type, ns) {
  if (!ns) {
    ns = return_type; // this is an invocation expression, not an invocation statement
  }
  let func = ns.functions[id];
  if (!func) {
    this.errs.push(`${line}: Attempt to invoke unknown function '${id}'`);
    return;
  }
  let { parameters } = func;
  if (args.length < parameters.length) {
    this.errs.push(`${line}: Not enough arguments for '${id}()' (only got ${args.length}, expected ${parameters.length})`);
    return func.return_type;
  }
  if (args.length > parameters.length) {
    this.errs.push(`${line}: Too many arguments for '${id}()' (got ${args.length}, only expected ${parameters.length})`);
    return func.return_type;
  }
  for (let i = 0; i < args.length; i++) {
    let argType = this.checkExpression(args[i], ns);
    let paramType = parameters[i].type;
    if (paramType !== argType && !(!nativeTypes.includes(paramType) && argType === 'null')) {
      this.errs.push(`${line}: Invocation of ${id}(): Incorrect type for argument ${i+1} (got ${argType}, expected ${paramType})`);
    }
  }
  return func.return_type;
};

TypeChecker.prototype.checkdot = function checkdot({line, left, id}, ns) {
  let typeLeft = this.checkExpression(left, ns);
  if (!typeLeft) {
    return;
  }

  if (!(typeLeft in ns.structs)) {
    this.errs.push(`${line}: Attempt to access field '${id}' of non-struct type '${typeLeft}'`);
    return;
  }
  if (!(id in ns.structs[typeLeft])) {
    this.errs.push(`${line}: Attempt to access non-existent field '${id}' of 'struct ${typeLeft}'`);
    return;
  }

  return ns.structs[typeLeft][id];
};


TypeChecker.prototype.checkunary = function checkunary({line, operator, operand}, ns) {
  let operandType = this.checkExpression(operand, ns);
  if (!(operator in unaryOperators)) {
    this.errs.push(`${line}: (PARSER ERROR) Unknown unary operator '${operator}'`);
    return;
  }
  if (!operandType) {
    return;
  }
  if (unaryOperators[operator] !== operandType) {
    this.errs.push(`${line}: Unary operator '${operator} expects type '${unaryOperators[operator]}', got type '${operandType}`);
    return;
  }
  return operandType;
};


TypeChecker.prototype.checkbinary = function checkbinary({line, operator, lft, rht}, ns) {
  let lftType = this.checkExpression(lft, ns);
  let rhtType = this.checkExpression(rht, ns);
  if (!(operator in binaryOperatorReturns)) {
    this.errs.push(`${line}: (PARSER ERROR) Unknown binary operator '${operator}'`);
    return;
  }
  if (!lftType || !rhtType) {
    return binaryOperatorReturns[operator];
  }
  if (binaryOperatorAccepts.int.includes(operator) && (lftType !== 'int' || rhtType !== 'int')) {
    this.errs.push(`${line}: Binary operator '${operator}' expects (num, num), got (${lftType},${rhtType})`);
  }
  if (binaryOperatorAccepts.bool.includes(operator) && (lftType !== 'bool' || rhtType !== 'bool')) {
    this.errs.push(`${line}: Binary operator '${operator}' expects (bool, bool), got (${lftType},${rhtType})`);
  }
  if (binaryOperatorAccepts.any.includes(operator)) {
    if (lftType === 'bool' && rhtType === 'bool') {
      this.warn('WbooleanComparison', `${line}: Applying operator '${operator}' to boolean values, use '&&' instead`);
    }
    if (lftType !== rhtType) {
      if (!((lftType === 'null' && !nativeTypes.includes(rhtType)) || (rhtType === 'null' && !nativeTypes.includes(lftType))) ) {
        this.errs.push(`${line}: Binary operator expects operands of matching type, got (${lftType},${rhtType})`);
      }
    }
  }
  // TODO: ban booleans from equality operations?
  return binaryOperatorReturns[operator];
};

TypeChecker.prototype.checkid = function checkid({line, id}, ns) {
  let varType = ns.locals[id] || ns.globals[id];
  if (!varType) {
    this.errs.push(`${line}: Reference to undeclared variable '${id}'`);
  }
  return varType;
};

TypeChecker.prototype.checknum = () => 'int';
TypeChecker.prototype.checktrue = TypeChecker.prototype.checkfalse = () => 'bool';
TypeChecker.prototype.checknew = function checknew({line, id}, ns) {
  if (!(id in ns.structs)) {
    this.errs.push(`${line}: Attempt to allocate unknown struct type '${id}'`);
    return;
  }
  return id;
}
TypeChecker.prototype.checknull = () => 'null';

function ReturnChecker(opts) {
  this.opts = opts;
  this.errs = [];
}

ReturnChecker.prototype.check = function check(ast) {
  for (let func of ast.functions) {
    this.checkFunction(func);
  }
  return this.errs;
};

ReturnChecker.prototype.checkFunction = function checkFunction({line, id, return_type, body}) {
  if (return_type !== 'void' && !this.checkStatements(body)) {
    this.errs.push(`${line}:${id}(): Non-void functions must have a guaranteed return.`);
  }
};

ReturnChecker.prototype.checkStatements = function checkStatements(statements) {
  return statements.some(this.checkStatement.bind(this));
};

ReturnChecker.prototype.checkStatement = function checkStatement(statement) {
  let { line, stmt, then, list } = statement;
  let _else = statement.else;
  switch (stmt)
  {
    case 'if':
      return this.checkStatement(then) && _else && this.checkStatement(_else);
      break; // eslint-disable-line no-unreachable
    case 'block':
      return this.checkStatements(list);
      break; // eslint-disable-line no-unreachable
    case 'return':
      return true;
      break; // eslint-disable-line no-unreachable
    case 'while':
    case 'print':
    case 'assign':
    case 'delete':
    case 'invocation':
      return false;
      break;  // eslint-disable-line no-unreachable
    default:
      throw console.error(`ERROR: Unknown statement type '${stmt}' on line ${line}`);
  }
};

module.exports = {
  TypeChecker,
  ReturnChecker
};
