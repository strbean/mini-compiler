Mini compiler in JavaScript
(c) 2018 Joseph Thomas


Requirements
------------

Node.js 10.14.x [here](https://nodejs.org/)


Installation
------------

Run `npm install` in root directory of project.


Usage
-----

For coomplete usage information, run `node ./src/js/app.js --help`

To compile a mini program to ARM assembly with optimization, run `node app.js all --arm -o <outfile> <infile>`

A note: -O disabled optimization for some reason. It is enabled by default. 

A variety of commands are provided to allow running only early phases of the compiler. For example, the `parse`
command outputs the AST json file, and the `static` command takes an AST json file and performs static analysis.

Usage: all [options] <mini>

Options:

  -U, --no-collapse-double-unary  Do not collapse double-negations and double-nots
  -T, --no-type-analysis          Do not perform type analysis
  -R, --no-return-analysis        Do not perform function return checking
  --Wall                          Enable all warnings
  --Wboolean-comparison           Warn on boolean comparison
  --stack                         Generate stack-based code
  --llvm                          Generate LLVM code
  --old-llvm                      Target old LLVM syntax
  -O, --no-optimization           Do not perform any optimization
  --no-sscp                       Do not perform Sparse Simple Constant Propagation (SSCP)
  --no-uce                        Do not perform Unused Code Elimination (SSA Unused Result)
  --no-cfg-simplification         Do not perform CFG Simplification
  --arm                           Generate ARM assembly
  -h, --help                      output usage information
