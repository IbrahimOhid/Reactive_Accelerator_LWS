import React, { useState } from "react";
import Welcome from "./Welcome";

const ShowText = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="text-center py-10">
      <button className={`${show ? 'bg-red-500' : 'bg-green-500'} px-3 py-1 rounded-xl mb-10 cursor-pointer`} onClick={() => setShow((s) => !s)}>
        {show ? "Remove" : "Show"}
      </button>
      <hr className="py-5" />
      {show && <Welcome />}
    </div>
  );
};

export default ShowText;
