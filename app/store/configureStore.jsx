var redux = require("redux");
var {searchTextReducer,showCompletedReducer,todosReducer} = require("./../reducers/reducers.jsx");

export var configure = ()=>{
    var reducer = redux.combineReducers({
       searchText:searchTextReducer,
        showCompleted:showCompletedReducer,
        todos:todosReducer
    });
    var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
};