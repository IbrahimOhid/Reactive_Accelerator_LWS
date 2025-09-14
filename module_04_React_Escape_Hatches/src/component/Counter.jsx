import React, { useRef } from "react";

const Counter = () => {
    console.log('Render')
    let ref = useRef(0)
    const handleClick = ()=>{
        ref.current = ref.current + 1;
        console.log(`Your Clicked ${ref.current} Times`)
    }
  return (
    <div>
      <button onClick={handleClick} className="bg-teal-700 px-3 py-2 text-white">Click Me</button>
    </div>
  );
};

export default Counter;
