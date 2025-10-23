import React from "react";

const ShowCount = ({title, count}) => {
    console.log(`Rendering ${title}`)
  return (
    <div>
      <h1 className="text-blue-900 font-extrabold">
        {" "}
        {title} is {count}
      </h1>
    </div>
  );
};

export default React.memo(ShowCount);
