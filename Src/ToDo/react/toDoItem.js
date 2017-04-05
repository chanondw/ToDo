var React = require('react');
var Col1Elem = require('./Col1Elem');

class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        var taskId = null, date = null;
        if (props.taskId)
            taskId = props.taskId;
        if (props.date)
            date = props.date;
        this.state = {
            taskId: taskId,
            checked: this.props.checked,
            title: this.props.title,
            text: this.props.title,
            showInput: this.props.showInput,
            textArea: this.props.description,
            description: this.props.description,
            date: date
        };
        this.onCheckedChanged = this.onCheckedChanged.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.confirmTextChange = this.confirmTextChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleTextAreaChange = this.handleTextAreaChange.bind(this);
    }
    onCheckedChanged() {
        this.setState({
            checked: !this.state.checked
        });
        this.props.onChanged({
            taskId: this.props.taskId,
            checked: !this.state.checked,
            title: this.state.title
        });
    }
    toggleVisibility() {
        this.setState({
            showInput: !this.state.showInput,
            text: this.state.title,
            textArea: this.state.description
        });
    }
    confirmTextChange() {
        this.setState({
            title: this.state.text,
            description: this.state.textArea
        });
        this.toggleVisibility();
        this.props.onChanged({
            taskId: this.props.taskId,
            checked: this.state.checked,
            title: this.state.text,
            description: this.state.textArea
        });
    }
    handleTextChange(evt) {
        this.setState({
            text: evt.target.value
        });
    }
    handleTextAreaChange(evt) {
        this.setState({
            textArea: evt.target.value
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
                                <label className="col-form-label col-form-label-sm">Title</label>
                                <input type="text" className="form-control sm-input" onChange={this.handleTextChange} value={this.state.text} />
                                <i className="glyphicon glyphicon-ok text-success" onClick={this.confirmTextChange} />
                                <i className="glyphicon glyphicon-remove text-danger" onClick={this.toggleVisibility}/>
                                <label className="col-form-label col-form-label-sm">Description</label>
                                <textarea className="form-control" value={this.state.textArea} onChange={this.handleTextAreaChange} />
                            </div>
                            :
                            <div>
                                <span className={"text-description " + (this.state.checked ? "strike" : "")} onClick={this.toggleVisibility}>
                                {this.state.title}
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