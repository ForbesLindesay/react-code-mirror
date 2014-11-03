'use strict';

var React = require('react');
var Application = require('./app.js');
require('codemirror/mode/javascript/javascript');

React.render(React.createElement(Application), document.getElementById('container'));
