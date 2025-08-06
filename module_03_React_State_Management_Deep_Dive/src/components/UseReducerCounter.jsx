import React, { useReducer } from "react";
import { ACTIONS, reducer } from "../reducers/counter";

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>Total Count: {state}</p>
      <button onClick={()=>dispatch({
        type: ACTIONS.INCREMENT,
        value: 1
      })}>Increment By One</button>
      <button onClick={()=>dispatch({
        type: ACTIONS.INCREMENT,
        value: 5
      })}>Increment By Five</button>
      <button onClick={()=>dispatch({
        type: ACTIONS.DECREMENT,
        value: 1
      })}>Decrement By One</button>
      <button onClick={()=>dispatch({
        type: ACTIONS.DECREMENT,
        value: 5
      })}>Decrement By Five</button>
      <button onClick={()=>dispatch({
        type: ACTIONS.RESET,
        value: 0
      })}>Reset</button>
    </div>
  );
};

export default UseReducerCounter;
