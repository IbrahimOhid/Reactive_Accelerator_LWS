import React, { useState } from "react";
import Navbar from "./Navbar";
import { CountContext } from "../context/CountContext";

const DemoContext = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ padding: "200px" }}>
      <CountContext.Provider value={count}>
        <Navbar />
        <button onClick={() => setCount(count + 1)}>Count - {count}</button>
      </CountContext.Provider>
    </div>
  );
};

export default DemoContext;
