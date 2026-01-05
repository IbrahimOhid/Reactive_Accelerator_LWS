import React, { useEffect, useState } from "react";
import { getPost } from "../api/PostApi";

const Post = () => {
  const [post, setPosts] = useState([]);
  const getPostData = async () => {
    const res = await getPost();
    setPosts(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);
  return (
    <div>
      <div className="flex flex-wrap justify-center mt-10">
        {/* card 1 */}
        {post.map((post) => {
          const { id, title, body } = post;
          return (
            <div key={id} className="p-4 max-w-sm">
              <div className="flex rounded-lg h-full  border shadow-xl p-4 flex-col">
                <div className="flex flex-col justify-between">
                    <p>{id}.</p>
                  <p className=" mb-1"><span className="font-bold">Title:</span> {title}</p>
                  <p className="text-base mb-2"><span className="font-bold">Body:</span> {body}</p>
                  <div className="flex gap-8">
                    <button className="bg-green-600 text-white rounded-xl font-bold py-1 px-4 cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-red-600 text-white rounded-xl font-bold py-1 px-4 cursor-pointer">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Post;
