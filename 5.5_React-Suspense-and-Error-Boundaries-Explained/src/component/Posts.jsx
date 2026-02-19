import React, { use } from "react";
import { fetchPosts } from "../api/fetchPosts";

const posts = fetchPosts();

const Posts = () => {
  const getPosts = use(posts);
  console.log(getPosts);
  return (
    <div>
      {getPosts.map((post) => (
        <div key={post.id} className="px-40 py-4 border border-amber-700 mx-20 my-10">
          <h1 className="font-bold">▶️ {post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
