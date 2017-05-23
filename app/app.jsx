var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var TodoApp = require('TodoApp');
var actions = require('./actions/actions.jsx');
var store = require('./store/configureStore.jsx').configure();

store.subscribe(()=>{
   console.log(store.getState());
});

store.dispatch(actions.addTodo('test todo'));
store.dispatch(actions.setSearchText('test search'));
store.dispatch(actions.toggleShowCompleted());
console.log(store.getState());
// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
