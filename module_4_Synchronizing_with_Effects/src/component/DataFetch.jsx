import React, { useEffect, useState } from "react";

const loadingMsg = <p>Todos Loading..........</p>;
const DataFetch = () => {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.json())
        .then((data) => setTodos(data), setIsLoading(false));
    }, 3000);
  }, []);
  const todosElement =
    todos &&
    todos.map((todo) => (
      <p key={todo.id}>
        {" "}
        {todo.id}. {todo.title}
      </p>
    ));
  return (
    <div className="text-center">
      <h1 className="font-bold underline">Todo List</h1>
      {isLoading && loadingMsg}
      {todosElement}
    </div>
  );
};

export default DataFetch;
