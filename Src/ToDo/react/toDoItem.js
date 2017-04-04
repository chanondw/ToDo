var React = require('react');
var Col1Elem = require('./Col1Elem');

class ToDoItem extends React.Component {
    constructor() {
        super();
    }
    render() {
        var cName = "todo-col-1";
        if (this.props.isCheckbox)
            cName += " border";
        return (<li className="todo-row" key={this.props.keyIndex}>
                    <div className={cName}>
                        <Col1Elem checkbox={this.props.isCheckbox} checked={this.props.checked} amount={this.props.amount} taskId={this.props.taskId} onChecked={this.props.onChecked} />
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