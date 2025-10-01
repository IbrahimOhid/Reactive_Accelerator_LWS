import React, { useEffect, useState } from "react";

const Basic = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h1>Fetching Data</h1>
      <h1>{data ? <p>{data.title}</p> : <p>Loading.......</p>}</h1>
    </div>
  );
};

export default Basic;
