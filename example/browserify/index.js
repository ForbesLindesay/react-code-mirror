'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Application = require('./app.js');
require('codemirror/mode/javascript/javascript');

ReactDOM.render(React.createElement(Application), document.getElementById('container'));
