'use strict';

var fs = require('fs');

var src = fs.readFileSync(__dirname + '/index.js', 'utf8');
src = src.replace(/var [A-Za-z]+ \= require\(\'[a-z]+\'\)\;/g, '');

src = src.replace(/module\.exports \=/, 'return');
src = src.replace(/^(.)/gm, '  $1');
src = 'CodeMirrorEditor = (function (React, CodeMirror) {' + src + '}(React, CodeMirror));';
src = '// auto-generated from index.js via build.js, do not edit directly\n' + src;

fs.writeFileSync(__dirname + '/standalone.js', src);
