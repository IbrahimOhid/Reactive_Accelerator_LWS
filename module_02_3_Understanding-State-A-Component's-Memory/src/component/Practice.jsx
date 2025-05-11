import {useState} from 'react'
const Practice = () => {
  const [count, setCount] = useState(0);

  function incrementCount(){
    setCount(count + 1)
  }
  return (
    <div>
      <h1 >Count: {count} </h1>
      <button onClick={incrementCount}>Click to Increment Count </button>
    </div>
  );
};

export default Practice;
