import React, { useState } from "react";

const bookData = [
  {
    id: 1,
    name: "The Alchemist",
  },
  {
    id: 2,
    name: "To Kill a Mockingbird",
  },
  {
    id: 3,
    name: "1984",
  },
  {
    id: 4,
    name: "The Great Gatsby",
  },
  {
    id: 5,
    name: "Pride and Prejudice",
  },
];

const Modal = ({modalText})=>{
 return <p>{modalText}</p>
}

const Book = () => {
  const [books, setBooks] = useState(bookData);
  const [bookName, setBookName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalText, setModalText] = useState('')

  const handleBookName = () => {
    setBooks([
      ...books,
      {
        id: new Date().getTime().toString(),
        name: bookName,
      },
    ]);
    setBookName("");
    setIsModalOpen
    setModalText('Book Added')
  };
  return (
    <div>
      <h3>Book List</h3>
      <input
        type="text"
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button onClick={handleBookName}>Add Book</button>
      {isModalOpen && <Modal modalText={modalText} />}
      {books.map((book) => (
        <li key={book.id}>{book.name}</li>
      ))}
    </div>
  );
};

export default Book;
