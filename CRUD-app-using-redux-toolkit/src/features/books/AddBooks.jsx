import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "./BooksSlice";
import {useNavigate } from "react-router-dom";

const AddBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const numberOfBooks = useSelector((state) => state.bookReducer.books.length);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const books = { id: numberOfBooks + 1, title, author };
    dispatch(addBooks(books));
    navigate("/show_book");
  };
  return (
    <div>
      <div className="bg-green-200 min-h-screen flex items-center">
        <div className="bg-white p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
          <form action="" onSubmit={handleSubmit}>
            <div className="flex items-center mb-5">
              <label
                htmlFor="name"
                className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500"
              >
                Title
              </label>
              <input
                title="c"
                id="name"
                type="text"
                placeholder="Book Title"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-10">
              <label
                htmlFor="twitter"
                className="w-20 inline-block text-right mr-4 text-gray-500 text-gray-500"
              >
                Author
              </label>
              <input
                type="text"
                name="twitter"
                id="twitter"
                placeholder="Book Author"
                className="border-b-2 border-gray-400 flex-1 py-2 placeholder-gray-300 outline-none focus:border-green-400"
                required
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="text-right">
              <button className="py-3 px-8 bg-green-500 text-green-100 font-bold rounded">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
