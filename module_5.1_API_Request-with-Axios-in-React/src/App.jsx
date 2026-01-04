import React, { useEffect, useState } from "react";
import { getPost } from "./api/PostApi";

const App = () => {
  const [post, setPosts] = useState([]);
  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
};

export default App;
