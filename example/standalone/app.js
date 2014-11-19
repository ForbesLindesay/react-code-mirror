;(function () {
  'use strict';

  var CodeMirror = React.createFactory(CodeMirrorEditor);
  var div = React.createFactory('div');
  var h1 = React.createFactory('h1');
  var p = React.createFactory('p');
  var pre = React.createFactory('pre');
  var code = React.createFactory('code');

  var Application = React.createClass({
    getInitialState: function () {
      return {
        src: 'function add(a, b) {\n' +
             '  return a + b;\n' +
             '}'
      };
    },
    render: function () {
      return div({},
        h1({}, 'Using "defaultValue"'),
        p({}, 'This creates an editable code mirror editor, as you would expect. ' +
                        'Note that it will not respond to changes in the model though.'),
        CodeMirror({
          style: {border: '1px solid black'},
          textAreaClassName: ['form-control'],
          textAreaStyle: {minHeight: '10em'},
          defaultValue: this.state.src,
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
          value: this.state.src,
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
          value: this.state.src,
          mode: 'javascript',
          theme: 'solarized',
          lineNumbers: true,
          onChange: function (e) {
            this.setState({src: e.target.value});
          }.bind(this)
        }),
        h1({}, 'Using the forceTextArea option'),
        p({}, 'This is the default fallback option for mobile browsers and works seamlessly.'),
        CodeMirror({
          forceTextArea: true,
          textAreaClassName: ['form-control'],
          textAreaStyle: {minHeight: '10em'},
          value: this.state.src,
          mode: 'javascript',
          theme: 'solarized',
          lineNumbers: true,
          onChange: function (e) {
            this.setState({src: e.target.value});
          }.bind(this)
        }),
        h1({}, 'Just a pre/code'),
        p({}, 'Just so you can see the output.'),
        pre({}, code({},  this.state.src))
      );
    }
  });

  React.render(React.createElement(Application), document.getElementById('container'));
}());
