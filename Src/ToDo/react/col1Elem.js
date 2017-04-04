var React = require('react');

class Col1Elem extends React.Component {
    render() {
        if (this.props.checkbox === "true") {
            return (<input type="checkbox" style="margin: 10px"/>);
        } else {
            return (<span>1</span>);
        }
    }
}

module.exports = Col1Elem;