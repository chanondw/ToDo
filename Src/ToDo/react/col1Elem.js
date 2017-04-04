var React = require('react');

class Col1Elem extends React.Component {
    constructor(){
        super();
    }
    render() {
        if (this.props.checkbox) {
            return (<input type="checkbox" checked={this.props.checked} onChange={this.props.onChecked} ref={this.props.taskId} />);
        } else {
            return (<span>{this.props.amount}</span>);
        }
    }
}

module.exports = Col1Elem;