'use strict';

var re = require( './../lib' );

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
