import React from "react";
import { useSelector } from "react-redux";
import Counter from "./components/Counter";

const App = () => {
  const { counters } = useSelector((state) => state.counters);
  return (
    <div>
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>
      <div className="py-20 border shadow-2xl w-60 mx-auto mt-10">
        {counters.map((counter) => (
          <Counter count={counter.value} key={counter.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
