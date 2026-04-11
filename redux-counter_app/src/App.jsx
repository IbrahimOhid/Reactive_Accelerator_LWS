import React from "react";
import Counter from "./component/Counter";
import { Provider } from "react-redux";
import { store } from "./features/counter";

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
