var React = require('react');
var TodoList = require("TodoList");
var AddTodo = require("AddTodo");
var TodoSearch = require("TodoSearch");
var uuid = require('node-uuid');
var api = require("../api/TodoApi.jsx");
var moment = require('moment');

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
                completed:false,
                createdAt:moment().unix(),
                completedAt:undefined
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
               todo.completed = !todo.completed;
               todo.completedAt = todo.completed ? moment().unix() : undefined;
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
          <h1 className="page-title" style={{textAlign:'center'}}>Todo App</h1>
          <div className="row">
              <div className="column small-centered small-11 medium-6 large-5">
                  <div className="container">
                      <TodoSearch onSearch={this.handleSearch} />
                      <TodoList onToggle={this.handleToggle} todos={filterTodos} />
                      <AddTodo onAddTodo={this.handleAdd} />
                  </div>
              </div>
          </div>

      </div>
    )
  }
});

module.exports = TodoApp;
