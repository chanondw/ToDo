var React = require('react');
var CompleteItem = require('./CompleteItem');
var ToDoItem = require('./ToDoItem');

class ToDoTable extends React.Component {
    getListFromStorage() {
        this.state.complete = [{description: "do laundry"}];
        this.state.todo = [{taskId: 0, isChecked: true, description: "do laundry"}];
    }
    constructor() {
        super();
        this.state = {
            complete: [],
            todo: []
        }
        this.getListFromStorage();
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onChecked = this.onChecked.bind(this);
    }
    onAddTodo(evt) {
        var todo = this.state.todo;
        var taskId = todo.length > 0 ? todo[todo.length - 1].taskId + 1 : 0;
        todo.push({taskId: taskId, isChecked: false, description: ""});
        this.setState({
            todo: todo
        });
    }
    onChecked(taskId, event) {
        var i = 0;
        for (i = 0; i < this.state.todo.length; i++) {
            if (this.state.todo[i]["taskId"] === taskId) {
                this.state.todo[i].isChecked = true;
                break;
            }
        }
        var complete = this.state.complete;
        complete.push({description: this.state.todo[i].description});
        this.setState({
            complete: complete,
            todo: this.state.todo
        });
    }
    render() {
        var completed;
        var todo = [];
        if (this.state.complete.length > 0) {
            completed = <CompleteItem amount={this.state.complete.length} />;
        }
        if (this.state.todo.length > 0) {
            for(var i = 0; i < this.state.todo.length; i++) {
                todo.push(<ToDoItem isCheckbox={true} checked={this.state.todo[i].isChecked} description={this.state.todo[i].description} key={this.state.todo[i].taskId} onChecked={this.onChecked.bind(this, this.state.todo[i].taskId)} />);
            }
        }
        return (
            <section className="jumbotron" >
                <section className="todo-header">
                    <h2>Reminders</h2>
                    <button className="btn btn-default" onClick={this.onAddTodo}>
                        <span className="glyphicon glyphicon-plus"></span>
                    </button>
                    <div className="clearboth"></div>
                </section>
                <section className="todo-body">
                    <ul>
        {completed}
        {todo}
                    </ul>
                </section>
            </section>);
    }
}

module.exports = ToDoTable;