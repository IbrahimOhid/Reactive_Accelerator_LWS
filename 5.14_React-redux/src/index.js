const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = 'ADD_USER'

// state
const initialCounter = {
  count: 0,
};

const initialUserState = {
  user: [{ name: "Ibrahim" }],
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

const addUser = ()=>{
    return{
        type: ADD_USER,
        payload:{name: 'ohid'}
    }
}