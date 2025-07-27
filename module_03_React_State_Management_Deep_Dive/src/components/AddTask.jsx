import React, { useState } from 'react'

const AddTask = ({onAddTask}) => {
  const [newText, setNewText] = useState('')
  return (
    <div>
      <input type="text" placeholder='Add Task' value={newText} onChange={(e)=>
         setNewText(e.target.value)} />
      <button onClick={()=> {
        setNewText('')
        onAddTask(newText)
      }} >Add</button>
    </div>
  )
}

export default AddTask
