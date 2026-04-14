import React from "react";
import Counter from "./component/Counter";
import Counter1 from "./component/Counter1";
import { Provider } from "react-redux";
import { store } from "./features/counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter1 />
    </Provider>
  );
};

export default App;
