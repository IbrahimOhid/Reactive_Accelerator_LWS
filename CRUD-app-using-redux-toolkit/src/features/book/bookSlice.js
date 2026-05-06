import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
  books: [
    { title: "The Moon", author: "Karim" },
    { title: "The Even", author: "Rahim" },
  ],
};

const bookReducer = createSlice({
  name: "books",
  initialState: initialBooks,
  reducers: {
    showBook: (state) => state,
    
  },
});

export const { showBook } = bookReducer.actions;
export default bookReducer.reducer;
