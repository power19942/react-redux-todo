var React = require('react');
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require('node-uuid');
var api = require("../api/TodoApi.jsx");

var TodoApp = React.createClass({
    componentDidUpdate:function () {
        api.setTodos(this.state.todos);
    },
    getInitialState:function () {
      return{
          showCompleted:false,
          searchText:'',
          todos:api.getTodos()
      }
    },
    handleAdd:function (text) {
        this.setState({
            todos:[
                ...this.state.todos,{
                text:text,
                id:uuid(),
                completed:false
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
    handleToggle:function (id) {
        var update = this.state.todos.map((todo)=>{
           if(todo.id===id){
               todo.completed = !todo.completed
           }
           return todo
        });

        this.setState({
            todos:update
        })
    },
  render: function () {
        var {todos, showCompleted, searchText} = this.state;
        var filterTodos = api.filterTodos(todos,showCompleted,searchText);
    return (
      <div>
          <TodoSearch onSearch={this.handleSearch} />
          <TodoList onToggle={this.handleToggle} todos={filterTodos} />
          <AddTodo onAddTodo={this.handleAdd} />

      </div>
    )
  }
});

module.exports = TodoApp;
