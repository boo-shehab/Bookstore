import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((state) => state.book);
  return (
    <div>
      <div>
        {book.map((book) => (
          <Book
            title={book.title}
            id={book.item_id}
            author={book.author}
            key={book.item_id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};
export default Books;
