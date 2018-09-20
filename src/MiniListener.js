// Generated from src/Mini.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by MiniParser.
function MiniListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

MiniListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
MiniListener.prototype.constructor = MiniListener;

// Enter a parse tree produced by MiniParser#program.
MiniListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by MiniParser#program.
MiniListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by MiniParser#types.
MiniListener.prototype.enterTypes = function(ctx) {
};

// Exit a parse tree produced by MiniParser#types.
MiniListener.prototype.exitTypes = function(ctx) {
};


// Enter a parse tree produced by MiniParser#typeDeclaration.
MiniListener.prototype.enterTypeDeclaration = function(ctx) {
};

// Exit a parse tree produced by MiniParser#typeDeclaration.
MiniListener.prototype.exitTypeDeclaration = function(ctx) {
};


// Enter a parse tree produced by MiniParser#nestedDecl.
MiniListener.prototype.enterNestedDecl = function(ctx) {
};

// Exit a parse tree produced by MiniParser#nestedDecl.
MiniListener.prototype.exitNestedDecl = function(ctx) {
};


// Enter a parse tree produced by MiniParser#decl.
MiniListener.prototype.enterDecl = function(ctx) {
};

// Exit a parse tree produced by MiniParser#decl.
MiniListener.prototype.exitDecl = function(ctx) {
};


// Enter a parse tree produced by MiniParser#IntType.
MiniListener.prototype.enterIntType = function(ctx) {
};

// Exit a parse tree produced by MiniParser#IntType.
MiniListener.prototype.exitIntType = function(ctx) {
};


// Enter a parse tree produced by MiniParser#BoolType.
MiniListener.prototype.enterBoolType = function(ctx) {
};

// Exit a parse tree produced by MiniParser#BoolType.
MiniListener.prototype.exitBoolType = function(ctx) {
};


// Enter a parse tree produced by MiniParser#StructType.
MiniListener.prototype.enterStructType = function(ctx) {
};

// Exit a parse tree produced by MiniParser#StructType.
MiniListener.prototype.exitStructType = function(ctx) {
};


// Enter a parse tree produced by MiniParser#declarations.
MiniListener.prototype.enterDeclarations = function(ctx) {
};

// Exit a parse tree produced by MiniParser#declarations.
MiniListener.prototype.exitDeclarations = function(ctx) {
};


// Enter a parse tree produced by MiniParser#declaration.
MiniListener.prototype.enterDeclaration = function(ctx) {
};

// Exit a parse tree produced by MiniParser#declaration.
MiniListener.prototype.exitDeclaration = function(ctx) {
};


// Enter a parse tree produced by MiniParser#functions.
MiniListener.prototype.enterFunctions = function(ctx) {
};

// Exit a parse tree produced by MiniParser#functions.
MiniListener.prototype.exitFunctions = function(ctx) {
};


// Enter a parse tree produced by MiniParser#function.
MiniListener.prototype.enterFunction = function(ctx) {
};

// Exit a parse tree produced by MiniParser#function.
MiniListener.prototype.exitFunction = function(ctx) {
};


// Enter a parse tree produced by MiniParser#parameters.
MiniListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by MiniParser#parameters.
MiniListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by MiniParser#ReturnTypeReal.
MiniListener.prototype.enterReturnTypeReal = function(ctx) {
};

// Exit a parse tree produced by MiniParser#ReturnTypeReal.
MiniListener.prototype.exitReturnTypeReal = function(ctx) {
};


// Enter a parse tree produced by MiniParser#ReturnTypeVoid.
MiniListener.prototype.enterReturnTypeVoid = function(ctx) {
};

// Exit a parse tree produced by MiniParser#ReturnTypeVoid.
MiniListener.prototype.exitReturnTypeVoid = function(ctx) {
};


// Enter a parse tree produced by MiniParser#NestedBlock.
MiniListener.prototype.enterNestedBlock = function(ctx) {
};

// Exit a parse tree produced by MiniParser#NestedBlock.
MiniListener.prototype.exitNestedBlock = function(ctx) {
};


// Enter a parse tree produced by MiniParser#Assignment.
MiniListener.prototype.enterAssignment = function(ctx) {
};

// Exit a parse tree produced by MiniParser#Assignment.
MiniListener.prototype.exitAssignment = function(ctx) {
};


// Enter a parse tree produced by MiniParser#Print.
MiniListener.prototype.enterPrint = function(ctx) {
};

// Exit a parse tree produced by MiniParser#Print.
MiniListener.prototype.exitPrint = function(ctx) {
};


// Enter a parse tree produced by MiniParser#PrintLn.
MiniListener.prototype.enterPrintLn = function(ctx) {
};

// Exit a parse tree produced by MiniParser#PrintLn.
MiniListener.prototype.exitPrintLn = function(ctx) {
};


// Enter a parse tree produced by MiniParser#Conditional.
MiniListener.prototype.enterConditional = function(ctx) {
};

// Exit a parse tree produced by MiniParser#Conditional.
MiniListener.prototype.exitConditional = function(ctx) {
};


// Enter a parse tree produced by MiniParser#While.
MiniListener.prototype.enterWhile = function(ctx) {
};

// Exit a parse tree produced by MiniParser#While.
MiniListener.prototype.exitWhile = function(ctx) {
};


// Enter a parse tree produced by MiniParser#Delete.
MiniListener.prototype.enterDelete = function(ctx) {
};

// Exit a parse tree produced by MiniParser#Delete.
MiniListener.prototype.exitDelete = function(ctx) {
};


// Enter a parse tree produced by MiniParser#Return.
MiniListener.prototype.enterReturn = function(ctx) {
};

// Exit a parse tree produced by MiniParser#Return.
MiniListener.prototype.exitReturn = function(ctx) {
};


// Enter a parse tree produced by MiniParser#Invocation.
MiniListener.prototype.enterInvocation = function(ctx) {
};

// Exit a parse tree produced by MiniParser#Invocation.
MiniListener.prototype.exitInvocation = function(ctx) {
};


// Enter a parse tree produced by MiniParser#block.
MiniListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by MiniParser#block.
MiniListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by MiniParser#statementList.
MiniListener.prototype.enterStatementList = function(ctx) {
};

// Exit a parse tree produced by MiniParser#statementList.
MiniListener.prototype.exitStatementList = function(ctx) {
};


// Enter a parse tree produced by MiniParser#LvalueId.
MiniListener.prototype.enterLvalueId = function(ctx) {
};

// Exit a parse tree produced by MiniParser#LvalueId.
MiniListener.prototype.exitLvalueId = function(ctx) {
};


// Enter a parse tree produced by MiniParser#LvalueDot.
MiniListener.prototype.enterLvalueDot = function(ctx) {
};

// Exit a parse tree produced by MiniParser#LvalueDot.
MiniListener.prototype.exitLvalueDot = function(ctx) {
};


// Enter a parse tree produced by MiniParser#IntegerExpr.
MiniListener.prototype.enterIntegerExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#IntegerExpr.
MiniListener.prototype.exitIntegerExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#TrueExpr.
MiniListener.prototype.enterTrueExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#TrueExpr.
MiniListener.prototype.exitTrueExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#IdentifierExpr.
MiniListener.prototype.enterIdentifierExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#IdentifierExpr.
MiniListener.prototype.exitIdentifierExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#BinaryExpr.
MiniListener.prototype.enterBinaryExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#BinaryExpr.
MiniListener.prototype.exitBinaryExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#NewExpr.
MiniListener.prototype.enterNewExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#NewExpr.
MiniListener.prototype.exitNewExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#NestedExpr.
MiniListener.prototype.enterNestedExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#NestedExpr.
MiniListener.prototype.exitNestedExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#DotExpr.
MiniListener.prototype.enterDotExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#DotExpr.
MiniListener.prototype.exitDotExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#UnaryExpr.
MiniListener.prototype.enterUnaryExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#UnaryExpr.
MiniListener.prototype.exitUnaryExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#InvocationExpr.
MiniListener.prototype.enterInvocationExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#InvocationExpr.
MiniListener.prototype.exitInvocationExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#FalseExpr.
MiniListener.prototype.enterFalseExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#FalseExpr.
MiniListener.prototype.exitFalseExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#NullExpr.
MiniListener.prototype.enterNullExpr = function(ctx) {
};

// Exit a parse tree produced by MiniParser#NullExpr.
MiniListener.prototype.exitNullExpr = function(ctx) {
};


// Enter a parse tree produced by MiniParser#arguments.
MiniListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by MiniParser#arguments.
MiniListener.prototype.exitArguments = function(ctx) {
};



exports.MiniListener = MiniListener;