// state-> initial state count
// action-> increment, decrement, reset
// reducer
// store

const { createStore } = require("redux");

const INCREMENT = "INCREMENT";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE ";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// initialState count
const initialCounterState = {
  count: 0,
};

//action
const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const incrementCounterByValueAction = (value)=>{
  return{
    type: INCREMENT_BY_VALUE,
    payload: value
  }
}

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

// reducer
const countReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
      case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
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

// store
const store = createStore(countReducer);

store.subscribe(()=>{
    console.log(store.getState())
})

// store.dispatch(incrementCounterAction())
// store.dispatch(decrementCounterAction())
// store.dispatch(resetCounterAction())
store.dispatch(incrementCounterByValueAction(3))

