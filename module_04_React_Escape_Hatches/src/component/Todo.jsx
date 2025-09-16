import React, { useRef } from "react";

const Todo = () => {
    const myRef = useRef(null);
    const handleBtn = ()=>{
        myRef.current.textContent = 'Hello Bangladesh'
    }
  return (
    <div>
      <div ref={myRef}>Hello</div>
      <button onClick={handleBtn} className="bg-gray-400 ml-3 px-2">Click Me</button>
    </div>
  );
};

export default Todo;
