var React = require("react");
var Todo = React.createClass({
    render:function () {
        var {text} = this.props;
        return(
            <div>
                {text} | {this.props.id}
            </div>
        )
    }
});

module.exports = Todo;