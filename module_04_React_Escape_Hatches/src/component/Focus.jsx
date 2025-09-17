import React, { useRef } from 'react'
import {MyInput} from './MyInput'

const Focus = () => {
    const inputRef = useRef(null);
    const handleFocus = ()=>{
        inputRef.current.focus();
    }
  return (
    <div className='mx-auto p-10'>
      <MyInput type='text' placeholder='Enter Your Name' ref={inputRef}/>
      <br />
      <br />
      <button className='bg-red-400 px-2' onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Focus
