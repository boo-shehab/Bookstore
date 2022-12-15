import { configureStore } from '@reduxjs/toolkit';
import categoryReduser from './categories/categories';
import bookSlice from './books/books';

const store = configureStore({
  reducer: {
    book: bookSlice,
    category: categoryReduser,
  },
});

export default store;
