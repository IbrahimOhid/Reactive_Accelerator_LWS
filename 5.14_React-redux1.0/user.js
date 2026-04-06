// state-> initial state
// action-> add User
// reducer
// store

const { createStore } = require("@reduxjs/toolkit");

const initialState = {
  users: ["Ibrahim"],
  count: 1,
};

const ADD_USER = "ADD_USER";

const addUserAction = (user) => {
  return {
    type: ADD_USER,
    payload: user,
  };
};

const addUserReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        
        users: [...state.users, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

const store = createStore(addUserReducers);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUserAction("Ohid"));
store.dispatch(addUserAction("Mohammad"));
