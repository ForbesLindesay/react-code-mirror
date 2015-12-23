# react-code-mirror

CodeMirror component for Facebook React

[![Dependency Status](https://img.shields.io/david/ForbesLindesay/react-code-mirror.svg)](https://david-dm.org/ForbesLindesay/react-code-mirror)
[![NPM version](https://img.shields.io/npm/v/react-code-mirror.svg)](https://www.npmjs.org/package/react-code-mirror)

## Installation

    npm install react-code-mirror

If you're not using browserify/node you can also just load the standalone.js file (having first loaded CodeMirror and React.

## Usage

See example folder

It can also render server side, providing you don't `require('codemirror')` anywhere on the server.  If you render server side it will just render the mobile view (i.e. a textarea) that will get upgraded to the full CodeMirror editor on the client.

## License

  MIT
