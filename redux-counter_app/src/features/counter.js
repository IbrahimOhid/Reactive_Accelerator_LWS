//state => count-0
// action => increment, decrement, reset
// reducers
// store

import { createStore } from "@reduxjs/toolkit";

// constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initial state
const initialCount = {
  count: 0,
};

// actions => increment, decrement, reset
export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};

export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};

export const resetAction = () => {
  return {
    type: RESET,
  };
};
// reducer
const counterReduces = (state = initialCount, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

export const store = createStore(counterReduces)
