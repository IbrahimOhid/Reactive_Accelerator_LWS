import React, { useState } from 'react'

const Example1 = () => {
    const [firstName] = useState('Mohammad');
    const [lastName] = useState('Ibrahim');
    const fullName = firstName + ' ' + lastName;
  return (
    <div>
      <h1>{fullName}</h1>
    </div>
  )
}

export default Example1
