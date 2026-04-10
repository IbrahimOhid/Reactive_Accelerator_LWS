// state
// action -> getPostRequest, getSuccessRequest, getErrorRequest
// reducer
// store

const { createStore, applyMiddleware } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");
const { thunk } = require("redux-thunk");

const GET_POST_REQUEST = "GET_POST_REQUEST";
const GET_SUCCESS_REQUEST = "GET_SUCCESS_REQUEST";
const GET_ERROR_REQUEST = "GET_ERROR_REQUEST";
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// initial State
const initialPostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

// ACTION
// getPostRequest Action
const getPostRequest = () => {
  return {
    type: GET_POST_REQUEST,
  };
};
// getSuccessRequest Action
const getSuccessRequest = (post) => {
  return {
    type: GET_SUCCESS_REQUEST,
    payload: post,
  };
};
// getErrorRequest Action
const getErrorRequest = (error) => {
  return {
    type: GET_ERROR_REQUEST,
    payload: error,
  };
};

const fetchPosts = () => {
  return (dispatch) => {
    dispatch(getPostRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const posts = res.data;
        const postTitle = posts.map((post) => post.title);
        dispatch(getSuccessRequest(postTitle));
      })
      .catch((error) => {
        const errMsg = error.message;
        dispatch(getErrorRequest(errMsg));
      });
  };
};

// post reduces
const postsReduces = (state = initialPostsState, action) => {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SUCCESS_REQUEST:
      return {
        ...state,
        isLoading: false,
        posts: action.payload,
      };
    case GET_ERROR_REQUEST:
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
const store = createStore(postsReduces, applyMiddleware(thunk));
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(fetchPosts());
