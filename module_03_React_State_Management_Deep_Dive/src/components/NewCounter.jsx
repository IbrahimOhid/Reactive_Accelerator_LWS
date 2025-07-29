import React, { useReducer } from "react";

const initialValue = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
};

const NewCounter = () => {
 const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div style={{ padding: "200px" }}>
      <div>Count - {count}</div>
      <button onClick={()=> dispatch('increment')}>Increment</button>
      <button onClick={()=> dispatch('decrement')}>Decrement</button>
    </div>
  );
};

export default NewCounter;
