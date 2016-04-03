var React = require('react');
var ReactDOM = require('react-dom');
var Todo = require('./components/app');

ReactDOM.render(<Todo count={10} />, document.getElementById('stickiez-note'));