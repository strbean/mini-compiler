const fs = require('fs');
const app = require('commander');
const Parse = require('./src/js/Parse');
const Static = require('./src/js/Static');
const Generate = require('./src/js/Generate');
const AstToString = require('./src/js/AstToString');
const { CFG, LLVM } = require('./src/js/Generate');
const Optimize = require('./src/js/Optimize');

/* add options to a command */
function glue(opts) {
  for (const opt of opts)
    this.option.apply(this, opt);
  return this;
}

/* common; make sure we can write the output before doing stuff */
function withOutfile(output, cb) {
  /* stdout */
  if (!output) {
    cb(null, process.stdout.fd);
  } else {
    fs.open(output, 'w', (err, fd) => {
      if (err) {
        console.error('ERROR: could not open output file for writing.');
        console.error(err);
        process.exit(1);
      }
      cb(null, fd);
    });
  }
}
/* do very bad stuff because it makes things look nicer later */
app.glue = glue;
app.Command.prototype.glue = glue;

/* These options are available regardless of the command. */
const universalOptions = [
  ['-o, --output [file]', 'Output file', './ast.out.json'],
  ['-W, --no-write', 'Do not save any output, just see if it compiles'],
  ['-v, --verbose', 'Increase chattiness'],
  ['-t, --target-architecture <target>', 'Specify target architecture', 'i686'],
];
app.glue(universalOptions);

/* Parse phase */
const parse = app.command('parse <mini>').description('Parse a mini program and output an AST');
const parseOptions = [
  ['-U, --no-collapse-double-unary', 'Do not collapse double-negations and double-nots'],
];
parse.glue(universalOptions);
parse.glue(parseOptions);

parse.action((mini, opts) => {
  console.log('Parsing...');
  if (opts.parent.write) {
    withOutfile(opts.parent.output, (err, fd) => {
      let ast = Parse.parseFile(mini);
      fs.writeSync(fd, JSON.stringify(ast));
    });
  } else {
    Parse.parseFile(mini);
  }
});

/* Static Anaylsis phase */
const staticAnalysis = app.command('static <ast>').description('Perform static analysis on an AST');
const staticAnalysisOptions = [
  ['-T, --no-type-analysis',              'Do not perform type analysis'],
  ['-R, --no-return-analysis',            'Do not perform function return checking'],
  ['--Wall',                              'Enable all warnings'],
  ['--Wboolean-comparison',               'Warn on boolean comparison'],
];
staticAnalysis.glue(universalOptions);
staticAnalysis.glue(staticAnalysisOptions);
staticAnalysis.action((astfile, opts) => {
  const ast = JSON.parse(fs.readFileSync(astfile));
  console.log('Performing static analysis...');
  let typeErrs = (new Static.TypeChecker(opts)).check(ast);
  console.log('Type checking results:');
  if (!typeErrs.length) {
    console.log('ALL TESTS PASSED');
  } else {
    console.log(`${typeErrs.length} ERRORS:`);
    for (let err of typeErrs) {
      console.log(err);
    }
  }
  let returnErrs = (new Static.ReturnChecker(opts)).check(ast);
  console.log('Return analysis results:');
  if (!returnErrs.length) {
    console.log('ALL TESTS PASSED');
  } else {
    console.log(`${returnErrs.length} ERRORS:`);
    for (let err of returnErrs) {
      console.log(err);
    }
  }
});

const generateCFG = app.command('cfg <ast>').description('Generate a Control Flow Graph from an AST');
const generateCFGOptions = [
];
generateCFG.glue(universalOptions);
generateCFG.glue(generateCFGOptions);
generateCFG.action((astfile, opts) => {
  const ast = JSON.parse(fs.readFileSync(astfile));
  console.log('Generating CFG...');
  const CFG = new Generate.CFG(opts);
  const cfgs = CFG.generate(ast);
  for (const cfg of cfgs) {
    console.log(`FUNCTION ${cfg.id}()`);
    for (const block of cfg.blockList) {
      console.log(`${block.label}:`);
      for (const statement of block.body) {
        process.stdout.write(AstToString.stringify(statement, 1));
      }
      console.log(`   -> ${block.successors.map(b => b.label).join(', ')}\n`);
    }
  }
  // TODO: serialize CFG
  //console.log(util.inspect(cfg));
});

const generateLLVM = app.command('llvm <ast>').description('Generate a Control Flow Graph from an AST');
const generateLLVMOptions =  [
  ['--stack', 'Generate stack-based code'],
  ['--llvm', 'Generate LLVM code'],
  ['--old-llvm', 'Target old LLVM syntax'],
];
generateLLVM.glue(universalOptions);
generateLLVM.glue(generateLLVMOptions);
generateLLVM.action(() => {
  //const ast = JSON.parse(fs.readFileSync(cfgfile));
  // TODO: deserialize CFG
  /*console.log('Generating CFG...');
  const CFG = new Generate.CFG(opts);
  const cfgs = CFG.generate(ast);
  for (const cfg of cfgs) {
    console.log(`FUNCTION ${cfg.id}()`)
    for (const block of cfg.blockList) {
      console.log(`${block.label}:`);
      for (const statement of block.body) {
        process.stdout.write(AstToString.stringify(statement, 1));
      }
      console.log(`   -> ${block.successors.map(b => b.label).join(', ')}\n`);
    }
  }*/
  //console.log(util.inspect(cfg));
});

const optimizationOptions = [
  ['-O, --no-optimization', 'Do not perform any optimization'],
  ['--no-sscp', 'Do not perform Sparse Simple Constant Propagation (SSCP)'],
  ['--no-uce', 'Do not perform Unused Code Elimination (SSA Unused Result)'],
  ['--no-cfg-simplification', 'Do not perform CFG Simplification'],
];

const all = app.command('all <mini>');
all
  .glue(parseOptions)
  .glue(staticAnalysisOptions)
  .glue(generateLLVMOptions)
  .glue(optimizationOptions);
all.action((mini, opts) => {
  console.log(`Compiling file '${mini}'`);
  console.log('Parsing...');
  const ast = Parse.parseFile(mini);
  if (!ast) {
    console.error('ERROR: failed to parse file, aborting');
    return;
  }

  console.log('Performing static analysis: Type Checking + Semantics');
  const tc = new Static.TypeChecker(opts);
  const tcErrs = tc.check(ast);
  if (!tcErrs.length) {
    console.log('All checks passed.');
  } else {
    console.log(`${tcErrs.length} errors during type checking and semantic analyis:`);
    for (let err of tcErrs) {
      console.log(err);
    }
    return;
  }

  console.log('Performing static analyis: Return Analysis');
  const rc = new Static.ReturnChecker(opts);
  let rcErrs = rc.check(ast);
  if (!rcErrs.length) {
    console.log('All checks passed.');
  } else {
    console.log(`${rcErrs.length} errors during return analysis:`);
    for (let err of rcErrs) {
      console.log(err);
    }
    return;
  }

  if (opts.llvm || opts.parent.llvm) {
    console.log('Building Control Flow Graph');
    const cfgGenerator = new CFG(opts);
    const cfgs = cfgGenerator.generate(ast);

    console.log(`Generating ${(opts.stack || opts.parent.stack) ? 'stack-based' : 'register-based'} LLVM assembly`);
    const llvmGenerator = new LLVM(opts);
    const cfgsWithLLVM = llvmGenerator.generate(cfgs);

    if (opts.optimization || opts.parent.optimization) {
      console.log('Performing optimizations...');
      for (const func of cfgsWithLLVM.functions) {
        if (opts.sscp || opts.parent.sscp) {
          Optimize.SSCP(func);
        }
        if (opts.uce || opts.parent.uce) {
          Optimize.SSAUnusedResult(func);
        }
        if (opts.cfgSimplification || opts.parent.cfgSimplification) {
          Optimize.CFGCleanup(func);
          if (opts.uce || opts.parent.uce) {
            Optimize.SSAUnusedResult(func);
            Optimize.CFGCleanup(func);
          }
        }
      }
    }

    if (opts.parent.write) {
      console.log(`Writing output to ${opts.parent.output ? opts.parent.output : 'STDOUT'}`);
      withOutfile(opts.parent.output, (err, file) => fs.writeSync(file, `${cfgsWithLLVM}`));
    }
  }
});

app.parse(process.argv);
