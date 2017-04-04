var React = require('react');
var ReactDom = require('react-dom');

var ToDoTable = require('./ToDoTable');

ReactDom.render(<ToDoTable />, document.getElementById("todo-table"));