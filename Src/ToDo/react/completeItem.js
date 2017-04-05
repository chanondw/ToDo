var React = require('react');
var ToDoItem = require('./ToDoItem');

class CompleteItem extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (<ToDoItem title="Completed" isCheckbox={false} amount={this.props.amount} showInput={false} />);
        }
}

module.exports = CompleteItem;