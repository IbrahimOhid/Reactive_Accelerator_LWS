import React, { useState } from 'react'
import Toggle from './Toggle'

const Example7 = () => {
    const [isOn, setIsOn] = useState(false)
  return (
    <div className='text-center py-10'>
        <p>{isOn ? 'On': 'Off'}</p>
     <Toggle onToggle = {setIsOn}/>
    </div>
  )
}

export default Example7
