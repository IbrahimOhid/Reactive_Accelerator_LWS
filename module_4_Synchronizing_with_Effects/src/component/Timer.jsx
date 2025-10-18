import React, { useEffect, useState } from "react";
import { useEffectEvent } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  const onTick = useEffectEvent(()=>{
    setCount(count + increment)
  })

  useEffect(()=>{
    console.log('time')
   const timerId =  setInterval(onTick, 1000);
   return ()=> clearInterval(timerId)
  }, []);

  return (
    <div className="text-center py-12">
      <h1 className="mb-5">
        Counter: {count}
        <button onClick={() => setCount(0)} className="bg-teal-600 px-3">
          Reset
        </button>
      </h1>
      <hr />
      <p className="py-5">
        Every second, increment by:
        <button disabled={increment === 0} onClick={()=> setIncrement(i => i - 1)} className={` px-3 py-1 ${increment === 0 ? 'bg-gray-400' : 'bg-red-500'}`}>–</button>
        <b>{increment}</b>
        <button onClick={()=> setIncrement(i => i + 1)} className="bg-green-500 px-2 py-1">+</button>
      </p>
    </div>
  );
};

export default Timer;
