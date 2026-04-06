// state-> initial value
// action -> increment, decrement, reset
// reducer-> state, action
// store

const { createStore } = require("@reduxjs/toolkit");

//initial value
const initialCounterValue = {
  count: 0,
};

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

const incrementCount = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCount = () => {
  return {
    type: DECREMENT,
  };
};

const resetCount = () => {
  return {
    type: RESET,
  };
};

// reducer for counter

const countReducer = (state = initialCounterValue, action) => {
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
      state;
  }
};

const store = createStore(countReducer);
console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(incrementCount())