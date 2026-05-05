import React from "react";
import { useSelector } from "react-redux";

const ShowBooks = () => {
  const books = useSelector((state) => state.bookReducer.books);
  return (
    <div>
      <div className="bg-white p-8 overflow-auto mt-16 h-screen">
        <h2 className="text-2xl mb-4">List of Books</h2>
        {/* Classes Table */}
        <div className="relative overflow-auto">
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full bg-white border mb-20">
              <thead>
                <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      ID
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      Title
                    </span>
                  </th>
                  <th className="p-0">
                    <span className="block py-2 px-3 border-r border-gray-300">
                      Author
                    </span>
                  </th>
                  <th className="p-4 text-xs md:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {books &&
                  books.map((book) => (
                    <tr className="border-b text-xs md:text-sm text-center text-gray-800" key={book.id}>
                      <td className="p-2 md:p-4">{book.id}</td>
                      <td className="p-2 md:p-4">{book.title}</td>
                      <td className="p-2 md:p-4">{book.author}</td>
                      <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                          Edit
                        </button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
