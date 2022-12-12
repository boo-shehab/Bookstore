import { configureStore } from '@reduxjs/toolkit';
import categoryReduser from './categories/categories';
import bookReduser from './books/books';

const store = configureStore({
  reducer: {
    book: bookReduser,
    category: categoryReduser,
  },
});

export default store;
