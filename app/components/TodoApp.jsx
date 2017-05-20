var React = require('react');
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require('node-uuid');

var TodoApp = React.createClass({
    getInitialState:function () {
      return{
          showCompleted:false,
          searchText:'',
          todos:[
              {
                  id:uuid(),
                  text:'shit',
              },
              {
                  id:uuid(),
                  text:'shit',
              },
              {
                  id:uuid(),
                  text:'shit',
              },
              {
                  id:uuid(),
                  text:'shit',
              },
              {
                  id:uuid(),
                  text:'shit',
              }
          ]
      }
    },
    handleAdd:function (text) {
        this.setState({
            todos:[
                ...this.state.todos,{
                text:text,
                id:uuid()
                }
            ]
        })
    },
    handleSearch:function (showCompleted,searchText) {
        this.setState({
            showCompleted:showCompleted,
            searchText:searchText
        })
    },
  render: function () {
        var {todos} = this.state;
    return (
      <div>
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList todos={todos} />
          <AddTodo onAddTodo={this.handleAdd} />

      </div>
    )
  }
});

module.exports = TodoApp;
