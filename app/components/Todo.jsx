var React = require("react");
var Todo = React.createClass({
    render:function () {
        var {text} = this.props;
        return(
            <div>
                {this.props.id}.{text}
            </div>
        )
    }
});

module.exports = Todo;