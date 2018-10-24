'use strict';

function stringifyTarget({id, left}) {
  return `${left ? `${stringifyTarget(left)}.` : ''}${id}`;
}

function stringify(thing, indent) {
  const {stmt, exp, guard, then, body, list, target, source, left, endl, id, args, operator, operand,
    lft, rht, value} = thing;
  const _else = thing.else;
  indent = indent || 0;
  let str = '';
  let indentStr = '';

  for (var i = 0; i < indent; i++) {
    indentStr += '   ';
  }

  //const statementRules = ['if', 'while', 'block', 'print', 'return', 'assign', 'delete', 'invocation'];
  if (stmt) {
    switch(stmt) {
      case 'if':
        str += indentStr
            + `if(${stringify(guard)}) {`
            + `${then ? `\n${stringify(then, indent+1)}\n${indentStr}}\n` : ' ... }\n'}`;
        if (_else) {
          str += indentStr
              + 'else {\n'
              + `${stringify(_else, indent+1)}\n`
              + `${indentStr}}\n`;
        }
        break;
      case 'while':
        str += indentStr
            + `while(${stringify(guard)}) {`
            + `${body ? `\n${stringify(body, indent+1)}\n${indentStr}}\n` : '... }\n'}`;
        break;
      case 'block':
        str += indentStr
            + '{\n'
            + list.map(thing => stringify(thing, indent+1)).join()
            + `${indentStr}}`;
        break;
      case 'print':
        str += indentStr
            + `print ${stringify(exp)}`
            + (endl ? ' endl' : '')
            + ';\n';
        break;
      case 'return':
        str += indentStr
            + `return${exp ? ' ' + stringify(exp) : ''};\n`
        break;
      case 'assign':
        str += indentStr
            + `${stringifyTarget(target)} = ${stringify(source)};\n`;
        break;
      case 'delete':
        str += indentStr
            + `delete ${exp};\n`;
        break;
      case 'invocation':
        str += indentStr
            + `${id}(${args.map(thing => stringify(thing)).join(', ')});\n`;
        break;
      default:
        str += indentStr
            + `UNKNOWNSTMT_${stmt};\n`;
        break;
    }
  }
  //const expressionRules = ['invocation', 'dot', 'unary', 'binary', 'id', 'num', 'true', 'false', 'new', 'null'];
  else if (exp) {
    switch(exp) {
      case 'invocation':
        str += `${id}(${args.map(thing => stringify(thing)).join(', ')})`;
        break;
      case 'dot':
        str += `${stringify(left)}.${id}`;
        break;
      case 'unary':
        str += `${operator}(${stringify(operand)})`;
        break;
      case 'binary':
        str += `(${stringify(lft)}) ${operator} (${stringify(rht)})`;
        break;
      case 'id':
        str += id;
        break;
      case 'num':
        str += value;
        break;
      case 'true':
        str += 'true';
        break;
      case 'false':
        str += 'false';
        break;
      case 'new':
        str += `new ${id}`;
        break;
      case 'null':
        str += 'null';
        break;
      default:
        str += `UNKNOWNEXP_${exp}`;
        break;
    }
  } else {
    str += 'UNHANDLED THING (not stmt or exp)\n';
  }
  return str;
}
module.exports = {
  stringify
};
