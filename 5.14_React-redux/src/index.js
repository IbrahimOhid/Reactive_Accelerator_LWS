const { createStore } = ("@reduxjs/toolkit");

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounter = {
  count: 0,
};


// actions - object-> type, payload
const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};



// create reducer for Counter
const counterReducer = (state = initialCounter, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count++,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count--,
      };

    default:
      state;
  }
};

// create store
const store = createStore(counterReducer);

store.subscribe(()=>{
  console.log(store.getState())
})

store.dispatch(incrementCounter())
