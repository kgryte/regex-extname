Filename Extension
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependencies][dependencies-image]][dependencies-url]

> [Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a filename extension.


## Installation

``` bash
$ npm install regex-extname
```


## Usage

``` javascript
var re = require( 'regex-extname' );
```

#### re

[Regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) to capture a filename extension. 

``` javascript
var ext;

// On a POSIX platform...
ext = re.exec( '/foo/bar/index.js' )[ 1 ];
// returns '.js'

// On a Windows platform...
ext = re.exec( 'C:\\foo\\bar\\index.js' )[ 1 ];
// returns '.js'
```


#### re.posix

[Regular expression](https://github.com/kgryte/regex-extname-posix) to capture a [POSIX](https://en.wikipedia.org/wiki/POSIX) filename extension.


#### re.win32

[Regular expression](https://github.com/kgryte/regex-extname-windows) to capture a Windows filename extension.



## Notes

*	 The main exported [regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) is [platform](https://github.com/kgryte/node-check-if-windows)-dependent. If the current process is running on Windows, `re === re.win32`; otherwise, `re === re.posix`.


## Examples

``` javascript
var re = require( 'regex-extname' );

var ext;

// Assuming a POSIX platform...
ext = re.exec( '/foo/bar/index.js' )[ 1 ];
console.log( ext );
// returns '.js'

ext = re.posix.exec( '/foo/bar/home.html' )[ 1 ];
console.log( ext );
// returns '.html'

ext = re.win32.exec( 'C:\\foo\\bar\\home.html' )[ 1 ];
console.log( ext );
// returns '.html'
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/regex-extname.svg
[npm-url]: https://npmjs.org/package/regex-extname

[travis-image]: http://img.shields.io/travis/kgryte/regex-extname/master.svg
[travis-url]: https://travis-ci.org/kgryte/regex-extname

[codecov-image]: https://img.shields.io/codecov/c/github/kgryte/regex-extname/master.svg
[codecov-url]: https://codecov.io/github/kgryte/regex-extname?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/regex-extname.svg
[dependencies-url]: https://david-dm.org/kgryte/regex-extname

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/regex-extname.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/regex-extname

[github-issues-image]: http://img.shields.io/github/issues/kgryte/regex-extname.svg
[github-issues-url]: https://github.com/kgryte/regex-extname/issues
