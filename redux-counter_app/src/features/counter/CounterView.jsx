import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByFive, reset } from "./counterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="text-center py-10">
      <h1>Count App</h1>
      <p>
        Count: <span className="font-bold">{count}</span>
      </p>
      <button
        onClick={() => dispatch(increment())}
        className="px-4 py-1 bg-green-400 rounded-full mt-5 cursor-pointer"
      >
        INCREMENT
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="px-4 py-1 bg-green-400 rounded-full mt-5 cursor-pointer"
      >
        DECREMENT
      </button>
      <button
        onClick={() => dispatch(reset())}
        className="px-4 py-1 bg-green-400 rounded-full mt-5 cursor-pointer"
      >
        RESET
      </button>
        <button
        onClick={() => dispatch(incrementByFive(5))}
        className="px-4 py-1 bg-green-400 rounded-full mt-5 cursor-pointer"
      >
        incrementBy5
      </button>
    </div>
  );
};

export default CounterView;
