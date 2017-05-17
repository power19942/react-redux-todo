var React = require('react');
var TodoList = require("TodoList");

var TodoApp = React.createClass({
    getInitialState:function () {
      return{
          todos:[
              {
                  id:1,
                  text:'shit',
              },
              {
                  id:2,
                  text:'shit',
              },
              {
                  id:3,
                  text:'shit',
              },
              {
                  id:4,
                  text:'shit',
              },
              {
                  id:5,
                  text:'shit',
              }
          ]
      }
    },
  render: function () {
        var {todos} = this.state;
    return (
      <div>
        <TodoList todos={todos} />
      </div>
    )
  }
});

module.exports = TodoApp;
