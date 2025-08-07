import React, { useState } from 'react'
import Users from './Users'

const ContextPractice = () => {
    const [users, setUsers] = useState([
        {id: 1, name: 'Mohammad'},
        {id:2 , name: 'Ibrahim'}
    ])
  return (
    <div>
      <Users users={users}/>
    </div>
  )
}

export default ContextPractice
