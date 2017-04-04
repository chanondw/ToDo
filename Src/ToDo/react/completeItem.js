var React = require('react');
var ToDoItem = require('./ToDoItem');

class CompleteItem extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            value: null
        }
    }
    render() {
        return (<ToDoItem description="Completed" isCheckbox={false} amount={this.props.amount} />);
        }
}

module.exports = CompleteItem;