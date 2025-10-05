import React, { useState } from "react";

const Toggle = ({onToggle}) => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = (nextIsOn) =>{
        onToggle(nextIsOn)
        setIsOn(nextIsOn)
    }

    const handleClick = ()=>{
        handleToggle(!isOn)
    }
  return (
    <div className="text-center py-5">
      <button onClick={handleClick} className="bg-teal-500 px-3 py-1 text-white rounded-lg">
        Toggle
      </button>
    </div>
  );
};

export default Toggle;
