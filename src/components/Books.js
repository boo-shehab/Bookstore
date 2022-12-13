import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const book = useSelector((state) => state.book);
  return (
    <div>
      <div>
        {book.map((ele) => <Book key={ele.id} title={ele.title} auther={ele.auther} id={ele.id} />)}
      </div>
      <Form />
    </div>
  );
};
export default Books;
