// Generated from src/js/grammar/Mini.g4 by ANTLR 4.7.1
// jshint ignore: start

const antlr4 = require('antlr4');
const mp = require('./MiniParser');

// This class defines a complete generic visitor for a parse tree produced by MiniParser.

function MiniVisitor() {
  antlr4.tree.ParseTreeVisitor.call(this);
  return this;
}

MiniVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
MiniVisitor.prototype.constructor = MiniVisitor;

// Visit a parse tree produced by MiniParser#rProgram.
MiniVisitor.prototype.visitRProgram = function(ctx) {
  return {
    types: this.visit(ctx.rTypes()),
    declarations: this.visit(ctx.rDeclarations()),
    functions: this.visit(ctx.rFunctions()),
  };
};


// Visit a parse tree produced by MiniParser#rTypes.
MiniVisitor.prototype.visitRTypes = function(ctx) {
  return ctx.children ? this.visitChildren(ctx) : [];
};


// Visit a parse tree produced by MiniParser#rTypeDeclaration.
MiniVisitor.prototype.visitRTypeDeclaration = function(ctx) {
  return {
    line: ctx.start.line,
    id: ctx.ID().getText(),
    fields: this.visit(ctx.rNestedDecl()),
  };
};


// Visit a parse tree produced by MiniParser#rNestedDecl.
MiniVisitor.prototype.visitRNestedDecl = function(ctx) {
  return this.visit(ctx.rDecl());
};


// Visit a parse tree produced by MiniParser#rDecl.
MiniVisitor.prototype.visitRDecl = function(ctx) {
  return {
    line: ctx.start.line,
    type: this.visit(ctx.rType()),
    id: ctx.ID().getText()
  };
};


// Visit a parse tree produced by MiniParser#IntType.
MiniVisitor.prototype.visitIntType = function() {
  return 'int';
};


// Visit a parse tree produced by MiniParser#BoolType.
MiniVisitor.prototype.visitBoolType = function() {
  return 'bool';
};


// Visit a parse tree produced by MiniParser#StructType.
MiniVisitor.prototype.visitStructType = function(ctx) {
  return ctx.ID().getText();
};


// Visit a parse tree produced by MiniParser#rDeclarations.
MiniVisitor.prototype.visitRDeclarations = function(ctx) {
  return ctx.rDeclaration
    ? Array.prototype.concat.apply([], this.visit(ctx.rDeclaration()))
    : [];
};


// Visit a parse tree produced by MiniParser#rDeclaration.
MiniVisitor.prototype.visitRDeclaration = function(ctx) {
  let type = this.visit(ctx.rType());
  return ctx.ID().map(name => ({
    line: ctx.start.line,
    type,
    id: name.getText()
  }));
};


// Visit a parse tree produced by MiniParser#rFunctions.
MiniVisitor.prototype.visitRFunctions = function(ctx) {
  return this.visit(ctx.rFunction());
};


// Visit a parse tree produced by MiniParser#rFunction.
MiniVisitor.prototype.visitRFunction = function(ctx) {
  return {
    line: ctx.start.line,
    id: ctx.ID().getText(),
    parameters: this.visit(ctx.rParameters()),
    return_type: this.visit(ctx.rReturnType()),
    declarations: this.visit(ctx.rDeclarations()),
    body: this.visit(ctx.rStatementList())
  };
};


// Visit a parse tree produced by MiniParser#rParameters.
MiniVisitor.prototype.visitRParameters = function(ctx) {
  return this.visit(ctx.rDecl());
};


// Visit a parse tree produced by MiniParser#ReturnTypeReal.
MiniVisitor.prototype.visitReturnTypeReal = function(ctx) {
  return this.visit(ctx.rType());
};


// Visit a parse tree produced by MiniParser#ReturnTypeVoid.
MiniVisitor.prototype.visitReturnTypeVoid = function() {
  return 'void';
};


// Visit a parse tree produced by MiniParser#NestedBlock.
MiniVisitor.prototype.visitNestedBlock = function(ctx) {
  return this.visit(ctx.rBlock());
};


// Visit a parse tree produced by MiniParser#Assignment.
MiniVisitor.prototype.visitAssignment = function(ctx) {
  return {
    line: ctx.start.line,
    stmt: 'assign',
    source: this.visit(ctx.rExpression()),
    target: this.visit(ctx.rLvalue())
  };
};


// Visit a parse tree produced by MiniParser#Print.
MiniVisitor.prototype.visitPrint = function(ctx) {
  return {
    line: ctx.start.line,
    stmt: 'print',
    exp: this.visit(ctx.rExpression()),
    endl: false
  };
};


// Visit a parse tree produced by MiniParser#PrintLn.
MiniVisitor.prototype.visitPrintLn = function(ctx) {
  return {
    line: ctx.start.line,
    stmt: 'print',
    exp: this.visit(ctx.rExpression()),
    endl: true
  };
};


// Visit a parse tree produced by MiniParser#Conditional.
MiniVisitor.prototype.visitConditional = function(ctx) {
  let result = {
    line: ctx.start.line,
    stmt: 'if',
    guard: this.visit(ctx.rExpression()),
    then: this.visitRBlock(ctx.thenBlock)
  };
  if (ctx.elseBlock) {
    result.else = this.visitRBlock(ctx.elseBlock);
  }
  return result;
};


// Visit a parse tree produced by MiniParser#While.
MiniVisitor.prototype.visitWhile = function(ctx) {
  return {
    line: ctx.start.line,
    stmt: 'while',
    guard: this.visit(ctx.rExpression()),
    body: this.visit(ctx.rBlock())
  };
};


// Visit a parse tree produced by MiniParser#Delete.
MiniVisitor.prototype.visitDelete = function(ctx) {
  return {
    line: ctx.start.line,
    stmt: 'delete',
    exp: this.visit(ctx.rExpression())
  };
};


// Visit a parse tree produced by MiniParser#Return.
MiniVisitor.prototype.visitReturn = function(ctx) {
  let result = {
    line: ctx.start.line,
    stmt: 'return'
  };

  let exp = ctx.rExpression();

  if (exp) {
    result.exp = this.visit(exp);
  }

  return result;
};


// Visit a parse tree produced by MiniParser#Invocation.
MiniVisitor.prototype.visitInvocation = function(ctx) {
  return {
    line: ctx.start.line,
    stmt: 'invocation',
    id: ctx.ID().getText(),
    args: this.visit(ctx.rArguments())
  };
};


// Visit a parse tree produced by MiniParser#rBlock.
MiniVisitor.prototype.visitRBlock = function(ctx) {
  return {
    stmt: 'block',
    list: this.visit(ctx.rStatementList())
  };
};


// Visit a parse tree produced by MiniParser#rStatementList.
MiniVisitor.prototype.visitRStatementList = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by MiniParser#LvalueId.
MiniVisitor.prototype.visitLvalueId = function(ctx) {
  return {
    line: ctx.start.line,
    id: ctx.ID().getText()
  };
};


// Visit a parse tree produced by MiniParser#LvalueDot.
MiniVisitor.prototype.visitLvalueDot = function(ctx) {
  return {
    line: ctx.start.line,
    left: this.visit(ctx.rLvalue()),
    id: ctx.ID().getText()
  };
};


// Visit a parse tree produced by MiniParser#IntegerExpr.
MiniVisitor.prototype.visitIntegerExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'num',
    value: ctx.INTEGER().getText()
  };
};


// Visit a parse tree produced by MiniParser#TrueExpr.
MiniVisitor.prototype.visitTrueExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'true'
  };
};


// Visit a parse tree produced by MiniParser#IdentifierExpr.
MiniVisitor.prototype.visitIdentifierExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'id',
    id: ctx.ID().getText()
  };
};


// Visit a parse tree produced by MiniParser#BinaryExpr.
MiniVisitor.prototype.visitBinaryExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'binary',
    operator: ctx.op.text,
    lft: this.visit(ctx.lft),
    rht: this.visit(ctx.rht)
  };
};


// Visit a parse tree produced by MiniParser#NestedExpr.
MiniVisitor.prototype.visitNestedExpr = function(ctx) {
  return this.visit(ctx.rExpression());
};


// Visit a parse tree produced by MiniParser#NewExpr.
MiniVisitor.prototype.visitNewExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'new',
    id: ctx.ID().getText()
  };
};


// Visit a parse tree produced by MiniParser#DotExpr.
MiniVisitor.prototype.visitDotExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'dot',
    left: this.visit(ctx.rExpression()),
    id: ctx.ID().getText()
  };
};


// Visit a parse tree produced by MiniParser#UnaryExpr.
MiniVisitor.prototype.visitUnaryExpr = function(ctx) {
  if (ctx.rExpression() instanceof (mp.MiniParser.UnaryExprContext) &&
      ctx.rExpression().text === ctx.text) {
    return this.visit(ctx.rExpression().rExpression());
  }


  return {
    line: ctx.start.line,
    exp: 'unary',
    operator: ctx.op.text,
    operand: this.visit(ctx.rExpression())
  };
};


// Visit a parse tree produced by MiniParser#InvocationExpr.
MiniVisitor.prototype.visitInvocationExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'invocation',
    id: ctx.ID().getText(),
    args: this.visit(ctx.rArguments())
  };
};


// Visit a parse tree produced by MiniParser#FalseExpr.
MiniVisitor.prototype.visitFalseExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'false'
  };
};


// Visit a parse tree produced by MiniParser#NullExpr.
MiniVisitor.prototype.visitNullExpr = function(ctx) {
  return {
    line: ctx.start.line,
    exp: 'null'
  };
};


// Visit a parse tree produced by MiniParser#rArguments.
MiniVisitor.prototype.visitRArguments = function(ctx) {
  return this.visit(ctx.rExpression());
};



exports.MiniVisitor = MiniVisitor;
