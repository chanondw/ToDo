var React = require('react');
var ReactDom = require('react-dom');

class Col1Elem extends React.Component {
    render() {
        if (this.props.checkbox === "true") {
            return (<input type="checkbox" style="margin: 10px"/>);
        } else {
            return (<span>1</span>);
        }
    }
}

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
class CompleteItem extends React.Component {
    constructor() {
        super();
        this.state = {
            value: null
        }
    }
    render() {
        return (<ToDoItem description="Completed" isCheckbox="false" />);
    }
}

ReactDom.render(<CompleteItem />, document.getElementById("todo-table"));