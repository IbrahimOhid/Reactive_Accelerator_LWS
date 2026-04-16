import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTodos } from "../features/todos";

const Todos = () => {
  const { isLoading, todos, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allTodos());
  }, []);
  return (
    <div>
      {isLoading && <h1>Data Loading...</h1>}
      {error && <h1 className="text-red-500">{error.message}</h1>}
      {todos &&
        todos.map((todo) => (
          <div className="text-center border w-48 mx-auto my-2">
            <h1 className="text-orange-400 underline font-bold">{todo.id}</h1>
            <h1>{todo.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default Todos;
