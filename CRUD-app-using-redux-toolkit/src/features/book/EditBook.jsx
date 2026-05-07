import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./bookSlice";
import { useDispatch } from "react-redux";

const EditBook = () => {
  const location = useLocation();
  const [id, setId] = useState(location.state.book.id);
  const [title, setTitle] = useState(location.state.book.title);
  const [author, setAuthor] = useState(location.state.book.author);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editBook({id, title, author}));
    navigate('/show-book')
  };
  return (
    <div>
      <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl mx-auto">
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Enter a Title"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-800 font-bold">
              Author
            </label>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Enter a Author Name"
              className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <button className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded">
            Update Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
