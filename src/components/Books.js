import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((state) => state.book);
  return (
    <div>
      <div>
        {book.map((ele) => (
          <Book
            title={ele.title}
            id={ele.id}
            author={ele.author}
            key={ele.id}
          />
        ))}
      </div>
      <Form />
    </div>
  );
};
export default Books;
