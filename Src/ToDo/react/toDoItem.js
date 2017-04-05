var React = require('react');
var Col1Elem = require('./Col1Elem');

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        var taskId = null;
        if (props.taskId)
            taskId = props.taskId;
        this.state = {
            taskId: taskId,
            checked: this.props.checked,
            description: this.props.description,
            text: this.props.description,
            showInput: this.props.showInput
        };
        this.onCheckedChanged = this.onCheckedChanged.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.confirmTextChange = this.confirmTextChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    onCheckedChanged() {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onChanged({
            taskId: this.props.taskId,
            checked: !this.state.checked,
            description: this.state.description
        });
    }
    toggleVisibility() {
        this.setState({
            showInput: !this.state.showInput,
            text: this.state.description
        });
    }
    confirmTextChange() {
        this.setState({
            description: this.state.text
        });
        this.toggleVisibility();
        this.props.onChanged({
            taskId: this.props.taskId,
            checked: this.state.checked,
            description: this.state.text
        });
    }
    handleTextChange(evt) {
        this.setState({
            text: evt.target.value
        });
    }
    handleDeleteItem() {
        this.props.onDelete(this.state.taskId);
    }
    render() {
        var cName = "todo-col-1";
        if (this.props.isCheckbox)
            cName += " border";
        return (<li className="todo-row">
                    <div className={cName}>
                        <Col1Elem checkbox={this.props.isCheckbox} checked={this.state.checked} amount={this.props.amount} onChecked={this.onCheckedChanged} />
                    </div>
                    <div className="todo-col-2">
                        {this.state.showInput ? 
                            <div>
                                <input type="text" className="form-control sm-input" onChange={this.handleTextChange} value={this.state.text} />
                                <i className="glyphicon glyphicon-ok text-success" onClick={this.confirmTextChange} />
                                <i className="glyphicon glyphicon-remove text-danger" onClick={this.toggleVisibility}/>
                            </div>
                            :
                            <div>
                                <span className={"text-description " + (this.state.checked ? "strike" : "")} onClick={this.toggleVisibility}>
                                {this.state.description}
                                </span>
                                {this.props.isCheckbox ?
                                <i className="glyphicon glyphicon-minus text-danger" onClick={this.handleDeleteItem}/>
                                : null }
                            </div>
                                }
                    </div>
                </li>);
                                }
}

module.exports = ToDoItem;