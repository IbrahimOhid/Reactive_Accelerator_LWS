import React from "react";

const Title = () => {
    console.log('Rendering Title....')
  return (
    <div>
      <h1 className="text-2xl font-extrabold">UseCallBack Hook Tutorial</h1>
    </div>
  );
};

export default React.memo(Title)
