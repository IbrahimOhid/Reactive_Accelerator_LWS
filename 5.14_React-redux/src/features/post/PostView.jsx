import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPost } from "./postSlice";

const PostView = () => {
  const { isLoading, posts, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPost());
  }, []);
  return (
    <div>
      {isLoading && <h1>{isLoading}</h1>}
      {error && <h1>{error}</h1>}

      {
       posts &&  posts?.map((post)=>(
            <div className="container px-5 mx-auto py-3">
          <div className="flex flex-wrap -m-4">
            <div className="p-4">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-red-600 mb-1">
                    {post.id}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {post.title}
                  </h1>
                  <p className="leading-relaxed mb-3">
                    {post.body}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       ))
      }
    </div>
  );
};

export default PostView;
