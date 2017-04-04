var React = require('react');
var ToDoItem = require('./ToDoItem');

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

module.exports = CompleteItem;