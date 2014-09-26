'use strict';

var React = require('react');
var CodeMirror = require('codemirror');

// adapted from:
// https://github.com/facebook/react/blob/master/docs/_js/live_editor.js#L16

// also used as an example:
// https://github.com/facebook/react/blob/aae31ae24c67216894ae42b8481a599206d18690/src/browser/ui/dom/components/ReactDOMInput.js

var IS_MOBILE = (
  navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
);

var CodeMirrorEditor = React.createClass({
  getInitialState: function() {
    var defaultValue = this.props.defaultValue;
    var value = defaultValue != null ? defaultValue : this.props.value;
    return {
      initialValue: value,
      value: value,
      isControlled: this.props.value != null
    };
  },

  propTypes: {
    value: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    style: React.PropTypes.object,
    className: React.PropTypes.object,
    onChange: React.PropTypes.func
  },

  componentDidMount: function() {
    var isTextArea = this.props.forceTextArea || IS_MOBILE;
    if (!isTextArea) {
      this.editor = CodeMirror.fromTextArea(this.refs.editor.getDOMNode(), this.props);
      this.editor.on('change', this.handleChange);
    }
  },

  componentDidUpdate: function() {
    if (this.editor) {
      if (this.props.value != null && this.state.value != this.props.value) {
        this.state.value = this.props.value;
        if (this.editor.getValue() !== this.state.value) {
          this.editor.setValue(this.props.value);
        }
      }
    }
  },

  handleChange: function() {
    if (this.editor) {
      var value = this.editor.getValue();
      if (value !== this.state.value) {
        this.props.onChange && this.props.onChange(value);
        if (this.editor.getValue() !== this.state.value) {
          if (this.state.isControlled) {
            this.editor.setValue(this.props.value);
          } else {
            this.state.value = value;
          }
        }
      }
    }
  },

  render: function() {
    var onChange = this.props.onChange;

    var isTextArea = this.props.forceTextArea || IS_MOBILE;

    var editor = React.DOM.textarea({
      ref: 'editor',
      value: this.props.value,
      readOnly: this.props.readOnly,
      defaultValue: this.props.defaultValue,
      onChange: onChange ? function (e) {
        onChange(e.target.value);
      } : undefined,
      style: this.props.textAreaStyle,
      className: this.props.textAreaClassName || this.props.textAreaClass
    });

    return React.DOM.div({style: this.props.style, className: this.props.className}, editor);
  }
});

module.exports = CodeMirrorEditor;
