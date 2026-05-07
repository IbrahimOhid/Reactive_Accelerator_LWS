import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: crypto.randomUUID(), title: "The Moon", author: "Karim" },
    { id: crypto.randomUUID(), title: "The Even", author: "Rahim" },
  ],
};

const bookReducer = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBook: (state) => state,
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, title, author } = action.payload;
      const editBook = state.books.find((b) => b.id === id);
      if (editBook) {
        ((editBook.id = id),
          (editBook.title = title),
          (editBook.author = author));
      }
    },
    deleteBook: (state, action) => {
      const deleteId = action.payload;
      state.books = state.books.filter((book) => book.id !== deleteId);
    },
  },
});

export const { showBook, addBook,editBook, deleteBook } = bookReducer.actions;
export default bookReducer.reducer;
