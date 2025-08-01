
import initialTasks from "../data/data";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import taskReducer from "../reducers/taskReducer";
import { useImmerReducer } from "use-immer";

const TodoApp = () => {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);
  const getTaskId = (taskId) => {
    const maxId = taskId.reduce((prev, curr) => {
      prev && prev.id > curr.id ? prev.id : curr.id;
    });
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: getTaskId(tasks),
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };
  return (
    <div>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default TodoApp;
