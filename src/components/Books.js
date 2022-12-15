import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';
import './Books.css';

const Books = () => {
  const { books, status } = useSelector((state) => state.book);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (!status) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <ul className="books">
        {books.map((book) => <li key={book.title}><Book book={book} /></li>)}
      </ul>
      <div className="horizontal-divider" />
      <Form />
    </div>
  );
};
export default Books;
