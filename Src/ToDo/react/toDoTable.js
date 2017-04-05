var React = require('react');
var CompleteItem = require('./CompleteItem');
var ToDoItem = require('./ToDoItem');

class ToDoTable extends React.Component {
    getListFromStorage() {
        var storedItem = JSON.parse(localStorage.getItem("todo"));
        if (storedItem && typeof storedItem !== undefined)
            this.state = storedItem;
    }
    constructor() {
        super();
        this.state = {
            complete: [],
            todo: []
        }
        this.getListFromStorage();
        this.onAddTodo = this.onAddTodo.bind(this);
        this.onItemChanged = this.onItemChanged.bind(this);
        this.onItemDelete = this.onItemDelete.bind(this);
    }
    onAddTodo(evt) {
        var todo = this.state.todo;
        var taskId = todo.length > 0 ? todo[todo.length - 1].taskId + 1 : 0;
        todo.push({taskId: taskId, isChecked: false, description: "" , showInput: true});
        this.setState({
            todo: todo
        });
    }
    onItemChanged(newTodo) {
        var i = 0;
        var complete = [];
        for (i = 0; i < this.state.todo.length; i++) {
            if (this.state.todo[i]["taskId"] === newTodo.taskId) {
                this.state.todo[i] = {
                    taskId: newTodo.taskId,
                    isChecked: newTodo.checked,
                    description: newTodo.description,
                    showInput: false
                };
            }
            if (this.state.todo[i].isChecked) {
                complete.push({description: this.state.todo[i].description});
            }
        }
        this.setState({
            complete: complete,
            todo: this.state.todo
        });
        localStorage.setItem("todo", JSON.stringify({
            complete: complete,
            todo: this.state.todo
        }));
    }
    onItemDelete(taskId) {
        var index = -1;
        var complete = [];
        for (var i = 0; i < this.state.todo.length; i++) {
            if (this.state.todo[i]["taskId"] === taskId) {
                index = i;
            }
            if (this.state.todo[i].isChecked && index !== i) {
                complete.push({description: this.state.todo[i].description});
            }
        }
        var todo = this.state.todo;
        todo.splice(index, 1);
        this.setState({
            todo: todo,
            complete: complete
        })
        localStorage.setItem("todo", JSON.stringify({
            todo: todo,
            complete: complete
        }));
    }
    render() {
        var completed;
        var todo = [];
        if (this.state.complete.length > 0) {
            completed = <CompleteItem amount={this.state.complete.length} />;
        }
        if (this.state.todo.length > 0) {
            for(var i = 0; i < this.state.todo.length; i++) {
                todo.push(<ToDoItem key={this.state.todo[i].taskId} isCheckbox={true} checked={this.state.todo[i].isChecked} description={this.state.todo[i].description} taskId={this.state.todo[i].taskId} onTextChanged={this.onTextChanged} onChanged={this.onItemChanged} showInput={this.state.todo[i].showInput} onDelete={this.onItemDelete} />);
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