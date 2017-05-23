var React = require("react");
var AddTodo = React.createClass({
    handleSubmit:function (e) {
        e.preventDefault();
        var text =this.refs.text.value;
        this.refs.text.value='';
        this.props.onAddTodo(text);
        this.refs.text.focus();
    },
    render:function () {
        return(
            <div className="container__footer">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref='text' placeholder="sfb" />
                    <button className="button expanded">Add</button>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;