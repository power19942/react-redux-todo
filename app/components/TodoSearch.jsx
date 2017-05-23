var React = require("react");
var TodoSearch = React.createClass({
    handleChange:function () {
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this.refs.searchText.value;
        this.props.onSearch(showCompleted,searchText);
    },
    render:function () {
        return(
            <div className="container__header">
                <div>
                    <input type="text" ref='searchText' onChange={this.handleChange} placeholder="sfb" />
                </div>
                <div>
                    <input type="checkbox" ref="showCompleted" onChange={this.handleChange} /> show completed
                </div>
            </div>
        )
    }
});

module.exports = TodoSearch;