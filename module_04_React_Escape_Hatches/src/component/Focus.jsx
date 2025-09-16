import React, { useRef } from 'react'

const Focus = () => {
    const inputRef = useRef(null);
    const handleFocus = ()=>{
        inputRef.current.focus()
    }
  return (
    <div>
      <input className='border' ref={inputRef} type="text" />
      <button className='bg-red-400 px-2' onClick={handleFocus}>Focus</button>
    </div>
  )
}

export default Focus
