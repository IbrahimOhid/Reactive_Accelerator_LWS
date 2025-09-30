import React, { useEffect, useState } from "react";

const PlayGround = () => {
  const [text, setText] = useState("a");
  useEffect(() => {
    console.log('🔵 Schedule "' + text + '" log');
    const timeoutId = setTimeout(() => {
      console.log("⏰ " + text);
    }, 3000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeoutId);
    };
  }, [text]);
  return (
    <div>
      <label>
        What to log:{" "}
        <input
          className="border mt-3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <h1>{text}</h1>
    </div>
  );
};

export default PlayGround;
