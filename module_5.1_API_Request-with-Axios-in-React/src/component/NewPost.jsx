import React from "react";

const NewPost = ({ posts }) => {
  console.log(posts);
  return (
    <section className="px-4 sm:px-6 lg:px-10 py-8">
      <form className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Title */}
          <input
            type="text"
            placeholder="Add Title"
            className="w-full md:flex-1 p-3 bg-gray-100 placeholder-gray-600 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Body */}
          <input
            type="text"
            placeholder="Add Body"
            className="w-full md:flex-1 p-3 bg-gray-100 placeholder-gray-600 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />

          {/* Button */}
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300"
          >
            Add
          </button>
        </div>
      </form>
    </section>
  );
};

export default NewPost;
