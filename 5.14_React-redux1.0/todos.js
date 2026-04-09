const { createStore, applyMiddleware } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");
const { thunk } = require("redux-thunk");

// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_ERROR = "GET_TODOS_ERROR";
const API_URL = "https://jsonplaceholder.typicode.com/todo";

// state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};
// action
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};

const getTodosError = (error) => {
  return {
    type: GET_TODOS_ERROR,
    payload: error,
  };
};

// fetch todos
const fetchTodos = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios.get(API_URL)
    .then((res) => {
        const todos = res.data
        const title = todos.map(todo => todo.title)
        dispatch(getTodosSuccess(title))
    })
    .catch((error)=>{
        const errMsg = error.message
        dispatch(getTodosError(errMsg))
    })
    
  };
};

// reducer
const todosReducers = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODOS_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// store
const store = createStore(todosReducers, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchTodos());
