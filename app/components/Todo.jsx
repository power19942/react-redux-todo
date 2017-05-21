var React = require("react");
var moment = require('moment');
var Todo = React.createClass({
    render:function () {
        var {text,completed,id,createdAt,completedAt} = this.props;
        var renderDate = ()=>{
            var msg = 'Created ';
            var timestamp = createdAt;
            if(completed){
                msg="Completed ";
                timestamp = completedAt;
            }
            return msg + moment.unix(timestamp).format('MMM Do YYYY @ h:mm')
        };
        return(
            <div onClick={()=>{
                this.props.onToggle(id)
            }}>
                <input type="checkbox" checked={completed}/>
                {text} - {renderDate()}
            </div>
        )
    }
});

module.exports = Todo;