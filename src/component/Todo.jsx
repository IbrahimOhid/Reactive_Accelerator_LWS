import React, { useRef } from "react";

const Todo = () => {
    const inputVal = useRef();
    const handleInputBtn = ()=>{
        console.log(inputVal.current.value)
    }
  return (
    <div>
      <input className="border" ref={inputVal} type="text" />
      <button onClick={handleInputBtn} className="bg-gray-400 ml-3 px-2">Log Value</button>
    </div>
  );
};

export default Todo;
