import React from "react";
import UsePostList from "../hook/useGetPost";

import Post from "./Post";

const GetRequest = () => {
  const { datas } = UsePostList();
  return (
    <div>
      <div>
        <Post datas={datas}/>
      </div>
      <div className="grid grid-cols-4 justify-center ">
        {/* card 1 */}
        {datas.map((data) => {
          const { id, title, body } = data;
          return (
            <div key={id} className="p-4 max-w-sm">
              <div className="flex rounded-lg h-full  border shadow-xl p-4 flex-col">
                <div className="flex flex-col justify-between">
                  <p className="text-blue-700 font-bold">{id}.</p>
                  <p className=" mb-1">
                    <span className="font-bold">Title:</span> {title}
                  </p>
                  <p className="text-base mb-2">
                    <span className="font-bold">Body:</span> {body}
                  </p>
                  <div className="flex gap-8">
                    <button className="bg-green-600 text-white rounded-xl font-bold py-1 px-4 cursor-pointer">
                      Edit
                    </button>
                    <button className="bg-red-600 text-white rounded-xl font-bold py-1 px-4 cursor-pointer">
                      Delete
                    </button>
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

export default GetRequest;
