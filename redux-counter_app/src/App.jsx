import React from "react";
import Counter from "./component/Counter";
import Counter1 from "./component/Counter1";
import { Provider } from "react-redux";
import Todos from "./component/Todos";
import CounterView from "./features/CounterView";

const App = () => {
  return (
    <div>
      {/* <Counter1 /> */}
      {/* <Todos /> */}
      <CounterView/>
    </div>
  );
};

export default App;
