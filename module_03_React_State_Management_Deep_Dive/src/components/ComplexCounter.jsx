import React, { useReducer } from "react";

const initialValue = {
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };

    default:
      return { counter: state.counter };
  }
};

const ComplexCounter = () => {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div style={{ padding: "250px" }}>
      <div>Count - {count.counter}</div>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 1,
          })
        }
      >
        Increment By 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
            value: 5,
          })
        }
      >
        Increment By 5
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 1,
          })
        }
      >
        Decrement By 1
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "decrement",
            value: 5,
          })
        }
      >
        Decrement By 5
      </button>
    </div>
  );
};

export default ComplexCounter;
