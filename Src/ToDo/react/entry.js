var React = require('react');
var ReactDom = require('react-dom');

var CompleteItem = require('./CompleteItem');

ReactDom.render(<CompleteItem />, document.getElementById("todo-table"));