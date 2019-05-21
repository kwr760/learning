const repl = require('1.4/repl');

let r = repl.start({
  ignoreUndefined: true,
  replMode: repl.REPL_MODE_STRICT
});

r.context.lodash = require('lodash');
