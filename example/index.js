'use strict';

var React = require('react');
var render = require('./render.js');
require('codemirror/mode/javascript/javascript');


function refresh() {
  React.renderComponent(render(refresh), document.getElementById('container'));
}
refresh();
