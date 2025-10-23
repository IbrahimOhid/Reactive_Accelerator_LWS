import React from 'react'

const Button = ({handleClick, children}) => {
    console.log(`Rendering ${children}`)
  return (
    <div>
      <button
        onClick={handleClick}
        className="bg-green-400 px-3 py-1 rounded-xl cursor-pointer"
      >
        {children}
      </button>
    </div>
  )
}

export default React.memo(Button)
