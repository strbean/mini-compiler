grammar Mini;

@header
{
   /* package declaration here */
}

/*
   Parser Rules
*/

rProgram
   :  rTypes rDeclarations rFunctions EOF
   ;
rTypes
   :  rTypeDeclaration*
   |  
   ;
rTypeDeclaration
   :  'struct' ID '{' rNestedDecl '}' ';'
   ;
rNestedDecl
   :  (rDecl ';')+
   ;
rDecl
   :  rType ID
   ;
rType
   :  'int'             # IntType
   |  'bool'            # BoolType
   |  'struct' ID       # StructType
   ;
rDeclarations
   :  (rDeclaration)*
   ;
rDeclaration
   :  rType ID (',' ID)* ';'
   ;
rFunctions
   :  rFunction*
   ;
rFunction
   :  'fun' ID rParameters rReturnType '{' rDeclarations rStatementList '}'
   ;
rParameters
   :  '(' (rDecl (',' rDecl)*)? ')'
   ;
rReturnType
   :  rType           # ReturnTypeReal
   |  'void'         # ReturnTypeVoid
   ;
rStatement
   :  rBlock                                           # NestedBlock
   |  rLvalue '=' (rExpression | 'read') ';'            # Assignment
   |  'print' rExpression ';'                          # Print
   |  'print' rExpression 'endl' ';'                   # PrintLn
   |  'if' '(' rExpression ')' thenBlock=rBlock
         ('else' elseBlock=rBlock)?                    # Conditional
   |  'while' '(' rExpression ')' rBlock                # While
   |  'delete' rExpression ';'                         # Delete
   |  'return' (rExpression)? ';'                      # Return
   |  ID '(' rArguments ')' ';'                        # Invocation
   ;
rBlock
   :  '{' rStatementList '}'
   ;
rStatementList
   :  rStatement*
   ;
rLvalue
   :  ID                                              # LvalueId
   |  rLvalue '.' ID                                   # LvalueDot
   ;
rExpression
   :  ID '(' rArguments ')'                               # InvocationExpr
   |  rExpression ('.' ID)                                # DotExpr
   |  op=('-' | '!') rExpression                          # UnaryExpr
   |  lft=rExpression op=('*' | '/') rht=rExpression                # BinaryExpr
   |  lft=rExpression op=('+' | '-') rht=rExpression                # BinaryExpr
   |  lft=rExpression op=('<' | '>' | '<=' | '>=') rht=rExpression  # BinaryExpr
   |  lft=rExpression op=('==' | '!=') rht=rExpression              # BinaryExpr
   |  lft=rExpression op='&&' rht=rExpression                       # BinaryExpr
   |  lft=rExpression op='||' rht=rExpression                       # BinaryExpr
   |  ID                                                 # IdentifierExpr
   |  INTEGER                                            # IntegerExpr
   |  'true'                                             # TrueExpr
   |  'false'                                            # FalseExpr
   |  'new' ID                                           # NewExpr
   |  'null'                                             # NullExpr
   |  '(' rExpression ')'                                 # NestedExpr
   ;
rArguments
   :  (rExpression (',' rExpression)*)?
   ;

/*
   Lexer Rules
*/

ID       :  [a-zA-Z][a-zA-Z0-9]* ;

INTEGER  :  '0' | [1-9][0-9]* ;

WS       :  [ \t\n\r\f]+ -> skip; 

COMMENT  :  '#' .*? '\n' -> skip;
