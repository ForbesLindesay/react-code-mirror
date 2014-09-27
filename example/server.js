'use strict';

var assert = require('assert');
var fs = require('fs');
var React = require('react');
var express = require('express');
var browserify = require('browserify-middleware');
var render = require('./render');

var app = express();

app.get('/', function (req, res) {
  var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
  html = html.replace('{{component}}', React.renderComponentToString(render()));
  res.send(html);
});
app.get('/index.js', browserify(__dirname + '/index.js'));
app.get('/codemirror.css', function (req, res) {
  res.sendFile(require.resolve('codemirror/lib/codemirror.css'));
});
app.get('/codemirror/theme/:theme.css', function (req, res) {
  assert(/^[a-z0-9\-]+$/.test(req.params.theme));
  res.sendFile(require.resolve('codemirror/theme/' + req.params.theme + '.css'));
});

app.listen(3000);
