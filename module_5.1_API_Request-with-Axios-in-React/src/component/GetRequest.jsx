import React from "react";
import useGetPostData from "../hook/useGetPostData";
import NewPost from "./NewPost";

const GetRequest = () => {
  const { posts } = useGetPostData();

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-10">
        <NewPost posts={posts}/>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts?.map(({ id, title, body }) => (
          <article
            key={id}
            className="bg-white rounded-2xl border shadow-sm hover:shadow-md transition-all duration-300 p-6 flex flex-col"
          >
            <p className="w-8 h-8 bg-orange-500 rounded-xl mx-auto p-1">{id}</p>
            <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
              Title: {title}
            </h3>

            <p className="text-sm sm:text-[15px] leading-relaxed line-clamp-4">
              <span className="font-bold">Body:</span> {body}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GetRequest;
