import AddTask from './components/AddTask'
import Counter from './components/Counter'
import Form from './components/Form'
import Pointer from './components/Pointer'
import AnotherForm from './components/anotherForm'
import TaskList from './components/TaskList'
import TravelPlan from './components/TravelPlan'
import UserInfoForm from './components/UserInfoForm'
import Reducer from './components/reducer'
// import { useState } from 'react'

// import initialTasks from './data/data'



function App() {
  // const [tasks, setTasks] = useState(initialTasks);

  // const getTaskId = (taskId)=>{
  //   const maxId = taskId.reduce((prev, curr)=>{
  //     prev && prev.id > curr.id ? prev.id : curr.id;
  //   })
  //   return maxId + 1;
  // }

  // const handleAddTask = (text)=>{
  //   setTasks([
  //     ...tasks,
  //     {
  //       id: getTaskId(tasks),
  //       text: text,
  //       done: false
  //     }
  //   ])
  // }

  // const handleChangeTask = (task)=>{
  //   const nextTask = tasks.map((t)=>{
  //     if(t.id === task.id){
  //       return task;
  //     }else{
  //       return t;
  //     }
  //   })
  //   setTasks(nextTask)
  // }

  // const handleDeleteTask = (taskId) =>{
  //   setTasks(tasks.filter((t)=> t.id !== taskId.id));
  // }

  return (
    <div>
      {/* <Form/> */}
      {/* <Pointer/> */}
      {/* <AnotherForm/> */}
      {/* <UserInfoForm/> */}
      {/* <TravelPlan/> */}
      {/* <Counter/> */}
      {/* <h1>Prague itinerary</h1>
      <AddTask onAddTask = {handleAddTask}/>
      <TaskList tasks={tasks} onChangeTask={handleChangeTask} onDeleteTask = {handleDeleteTask}/> */}

      <Reducer/>
    </div>
  )
}
export default App
