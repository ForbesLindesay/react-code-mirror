'use strict';

var React = require('react');
var CodeMirror = require('../');
require('codemirror/mode/javascript/javascript');

var h1 = React.DOM.h1;
var p = React.DOM.p;
var pre = React.DOM.pre;
var code = React.DOM.code;

var src = 'function add(a, b) {\n' +
          '  return a + b;\n' +
          '}';

function render() {
  React.renderComponent(React.DOM.div({},
    h1({}, 'Using "defaultValue"'),
    p({}, 'This creates an editable code mirror editor, as you would expect. ' +
                    'Note that it will not respond to changes in the model though.'),
    CodeMirror({
      style: {border: '1px solid black'},
      textAreaClassName: ['form-control'],
      textAreaStyle: {minHeight: '10em'},
      defaultValue: src,
      mode: 'javascript',
      theme: 'solarized',
      lineNumbers: true
    }),
    h1({}, 'Using "value" and no "onChange"'),
    p({}, 'This creates a read only code mirror editor that responds to changes.'),
    CodeMirror({
      style: {border: '1px solid black'},
      textAreaClassName: ['form-control'],
      textAreaStyle: {minHeight: '10em'},
      value: src,
      mode: 'javascript',
      theme: 'solarized',
      lineNumbers: true,
      readOnly: true
    }),
    h1({}, 'Using "value" with "onChange"'),
    p({}, 'This creates a typical, editable code mirror editor that responds to changes.'),
    CodeMirror({
      style: {border: '1px solid black'},
      textAreaClassName: ['form-control'],
      textAreaStyle: {minHeight: '10em'},
      value: src,
      mode: 'javascript',
      theme: 'solarized',
      lineNumbers: true,
      onChange: function (value) {
        src = value;
        render();
      }
    }),
    h1({}, 'Using the forceTextArea option'),
    p({}, 'This is the default fallback option for mobile browsers and works seamlessly.'),
    CodeMirror({
      forceTextArea: true,
      textAreaClassName: ['form-control'],
      textAreaStyle: {minHeight: '10em'},
      value: src,
      mode: 'javascript',
      theme: 'solarized',
      lineNumbers: true,
      onChange: function (value) {
        src = value;
        render();
      }
    }),
    h1({}, 'Just a pre/code'),
    p({}, 'Just so you can see the output.'),
    pre({}, code({}, src))
  ), document.getElementById('container'));
}
render();
