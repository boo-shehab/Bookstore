import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/books';
import Book from './Book';
import Form from './Form';

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
      <div>
        {books.map((ele) => (
          <Book
            title={ele.title}
            id={ele.item_id}
            author={ele.author}
            key={ele.item_id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};
export default Books;
