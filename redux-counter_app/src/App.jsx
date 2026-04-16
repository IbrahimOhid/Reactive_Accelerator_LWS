import React from "react";
import Counter from "./component/Counter";
import Counter1 from "./component/Counter1";
import { Provider } from "react-redux";
// import { store } from "./features/counter";
import Todos from "./component/Todos";
import { store } from "./features/todos";

const App = () => {
  return (
    <Provider store={store}>
      {/* <Counter1 /> */}
      <Todos />
    </Provider>
  );
};

export default App;
