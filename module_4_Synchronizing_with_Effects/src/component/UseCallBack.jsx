import React, { useCallback, useState } from "react";
import Title from "./Title";
import ShowCount from "./ShowCount";
import Button from "./Button";

const UseCallBack = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncOne = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  }, []);

  const handleIncFive = useCallback(() => {
    setCount2((prevCount) => prevCount + 5);
  }, []);

  return (
    <div className="text-center py-10">
      <Title />
      <ShowCount count={count1} title="Counter 1" />
      <Button handleClick={handleIncOne}>Increment By ONe</Button>
      <hr className="my-5" />
      <ShowCount count={count2} title="Counter 2" />
      <Button handleClick={handleIncFive}>Increment By Five</Button>
    </div>
  );
};

export default UseCallBack;
