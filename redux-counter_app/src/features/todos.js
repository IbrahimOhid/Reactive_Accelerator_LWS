import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import { thunk } from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";

// constants
// state -> initial state
// action -> fetch
// reducers
// store
// provider

// initial state
const initialState = {
  isLoading: false,
  todos: [],
  error: null,
};

// constants
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const GET_TODOS_FAILED = "GET_TODOS_FAILED";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// action (Thunk)
export const allTodos = () => async (dispatch) => {
  dispatch({ type: GET_TODOS_REQUEST });

  try {
    const res = await axios.get(API_URL);

    dispatch({
      type: GET_TODOS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_TODOS_FAILED,
      payload: error.message,
    });
  }
};

// reducer
const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_SUCCESS:
      return {
        isLoading: false,
        todos: action.payload,
        error: null,
      };

    case GET_TODOS_FAILED:
      return {
        isLoading: false,
        todos: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

// store
// export const store = createStore(todoReducers, applyMiddleware(thunk));
export const store = configureStore({
  reducer: todoReducers,
});
