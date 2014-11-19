'use strict';

var fs = require('fs');

var src = fs.readFileSync(__dirname + '/index.js', 'utf8');

src = src.replace(/^(.)/gm, '  $1');
src = 'CodeMirrorEditor = (function (require, module) {\n' + src + '\n  return module.exports;\n}(function (id) {\n' +
  '  if (id === "react") return React;\n' +
  '  else if (id === "codemirror") return CodeMirror;\n' +
  '  else throw new Error("Unexpected require of " + id);' +
  '\n}, {exports: {}}));';
src = '// auto-generated from index.js via build.js, do not edit directly\n' + src;

fs.writeFileSync(__dirname + '/standalone.js', src);
