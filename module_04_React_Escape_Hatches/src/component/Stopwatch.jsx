import React, { useState } from 'react'

const Stopwatch = () => {
    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);

    const handleStart = ()=>{
        setStartTime(Date.now());
        setNow(Date.now());

        setInterval(() => {
            setNow(Date.now())
        }, 10);
    }
    
        let secondPassed = 0;
        if(startTime != null && now !=null){
            secondPassed = (now-startTime) / 1000;
        }
  return (
    <div>
      <h1 className='font-bold'>Time Passed: {secondPassed.toFixed(3)} </h1>
      <button onClick={handleStart} className='bg-green-400 px-2 py-1 mt-10'>Start</button>
      <button className='bg-red-400 px-2 py-1'>Stop</button>
    </div>
  )
}

export default Stopwatch
