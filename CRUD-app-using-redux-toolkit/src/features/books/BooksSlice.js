import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { id: 1, title: "The Eidgaon", author: "Md Ibrahim" },
    { id: 2, title: "The Earth", author: "Md Karim" },
    { id: 3, title: "The Enemy", author: "Rakib" },
  ],
};

 const bookReducer = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBooks: (state) => state,
  },
});

export const { showBooks } = bookReducer.actions;
export default bookReducer.reducer;
