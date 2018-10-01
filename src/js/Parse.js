'use strict';

const fs = require('fs'),
  util = require('util');
const antlr4 = require('antlr4');
const diff = require('jsondiffpatch');

const Lexer = require('./grammar/MiniLexer').MiniLexer;
const Parser = require('./grammar/MiniParser').MiniParser;
const Visitor = require('./grammar/MiniVisitor').MiniVisitor;

function parse(inputstream) {
  const lexer = new Lexer(inputstream);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  const parser = new Parser(tokens);
  const visitor = new Visitor();
  parser.buildParseTrees = true;
  const tree = parser.rProgram();
  return visitor.visitRProgram(tree);
}

const parseFile = (filename) => parse(new antlr4.FileStream(filename));

const parseString = string => parse(new antlr4.InputStream(string));


if (require.main === module) {
  const inputFile = process.argv[2];
  const referenceFile = process.argv[3];
  const outputFile = process.argv[4];
  let tree, ref, ast, visitor = new Visitor();
  tree = parseFile(inputFile);
  ref = JSON.parse(fs.readFileSync(referenceFile));
  ast = visitor.visitRProgram(tree);

  // console.log(util.inspect(diff.diff(ref, ast), { depth: null}));
  fs.writeFileSync(outputFile, JSON.stringify(ast));
}

module.exports = { parse, parseFile, parseString };

