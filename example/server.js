'use strict';

var assert = require('assert');
var express = require('express');
var browserify = require('browserify-middleware');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
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
