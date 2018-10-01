const fs = require('fs');
const app = require('commander');
const Parse = require('./src/js/Parse');
const Static = require('./src/js/Static');

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
        process.exit(1)
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
];
app.glue(universalOptions);

/* Parse phase */
const parse = app.command('parse <mini>').description('Parse a mini program and output an AST');
const parseOptions = [
  ['-U, --no-collapse-double-unary', 'Do not collapse double-negations and double-nots'],
];
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
  ['-T, --no-type-analysis', 'Do not perform type analysis'],
  ['-R, --no-return-analysis', 'Do not perform function return checking'],
];
staticAnalysis.glue(staticAnalysisOptions);
staticAnalysis.action((astfile, opts) => {
  const ast = JSON.parse(fs.readFileSync(astfile));
  console.log('Performing static analysis...');
  let typeErrs = (new Static.TypeChecker()).check(ast);
  console.log('Type checking results:')
  if (!typeErrs.length) {
    console.log('ALL TESTS PASSED');
  } else {
    console.log(`${typeErrs.length} ERRORS:`);
    for (let err of typeErrs) {
      console.log(err);
    }
  }
  let returnErrs = (new Static.ReturnChecker()).check(ast);
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

const all = app.command('all <mini>');
all
  .glue(parseOptions)
  .glue(staticAnalysisOptions);
all.action((mini, opts) => {
  console.log('Parsing...')
  const ast = Parse.parseFile(mini);
  if (!ast) {
    console.error('ERROR: failed to parse file, aborting');
  } else {
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
    }
  }
});

app.parse(process.argv);
