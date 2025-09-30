import React, { useState } from "react";
import PlayGround from "./PlayGround";

const Putting = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="bg-red-400 px-2 rounded-2xl"
        onClick={() => setShow(!show)}
      >
        {show ? "Unmount" : "Mount"} the component
      </button>
      {show && <hr />}
      {show && <PlayGround/>}
    </>
  );
};

export default Putting;
