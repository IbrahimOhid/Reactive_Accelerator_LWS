import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction, resetAction } from "../features/counter";

const Counter = () => {
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch()

    const handleIncrement = ()=>{
        dispatch(incrementAction())
    }

    const handleDecrement = ()=>{
        dispatch(decrementAction())
    }
    const handleReset = ()=>{
        dispatch(resetAction())
    }


  return (
    <div className="py-20  text-center">
      <div className="py-10 text-5xl">{count}</div>
      <div className="">
        <button onClick={handleIncrement} className="bg-green-400 px-3 py-1 font-bold text-white rounded-2xl mr-4">
          {" "}
          Increment
        </button>
        <button onClick={handleDecrement} className="bg-red-400 px-3 py-1 font-bold text-white rounded-2xl">
          Decrement
        </button>
      </div>
      <button onClick={handleReset} className="bg-gray-500 px-3 py-1 mt-5 font-bold text-white rounded-2xl">
        Reset
      </button>
    </div>
  );
};

export default Counter;
