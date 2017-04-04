var React = require('react');
var Col1Elem = require('./Col1Elem');

class ToDoItem extends React.Component {
    render() {
        return (<li className="todo-row">
                 <div className="todo-col-1">
                  <Col1Elem checkbox="{props.isCheckbox}" checked="{props.checked}" />
                  </div>
                  <div className="todo-col-2">
                  <span className="text-description">
                  {this.props.description}
                  </span>
                  </div>
                  </li>);
    }
}

module.exports = ToDoItem;