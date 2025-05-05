
'use strict';

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.
// Otherwise, JSON or YAML is recommended.


// valid environments
const validEnvironments = ['--prod', '--stag', '--dev'];
const env = process.argv.find(arg => validEnvironments.includes(arg));
process.env['LR_ENV'] = env || '--dev';


module.exports = {
  'allow-uncaught': false,
  'async-only': false,
  bail: false,
  'check-leaks': false,
  color: true,
  delay: false,
  diff: false,
  exit: false, // could be expressed as "'no-exit': true"
  extension: ['js', 'cjs', 'mjs'],
  'fail-zero': true,
  //fgrep: 'something', // fgrep and grep are mutually exclusive
  //file: ['/path/to/some/file', '/path/to/some/other/file'],
  'forbid-only': false,
  'forbid-pending': false,
  'full-trace': false,
  global: ['jQuery', '$'],
  //grep: /something/i, // also 'something', fgrep and grep are mutually exclusive
  growl: false,
  //ignore: ['/path/to/some/ignored/file'],
  'inline-diffs': false,
  // invert: false, // needs to be used with grep or fgrep
  jobs: 10,
  'node-option': ['unhandled-rejections=strict'], // without leading "--", also V8 flags
  package: './package.json',
  parallel: false,
  recursive: true,
  reporter: 'spec',
  //reporter: 'mocha-multi-reporters',
  //reporterOptions: ['configFile=reporter.conf.js'],
  'reporter-option': ['foo=bar', 'baz=quux'], // array, not object
  //require: '@babel/register',
  retries: 2,
  //slow: '75',
  //sort: false,
  //spec: ['test/**/*.spec.js'], // the positional arguments!
  timeout: '60000', // same as "timeout: '2s'"
  // timeout: false, // same as "timeout: 0"
  'trace-warnings': true, // node flags ok
  ui: 'bdd',
  'v8-stack-trace-limit': 100, // V8 flags are prepended with "v8-"
  watch: false,
  'watch-files': ['lib/**/*.js', 'test/**/*.js'],
  'watch-ignore': ['lib/vendor']
};
