import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/books/BooksSlice";

export const store = configureStore({
    reducer: {
        bookReducer: bookReducer
    }
})