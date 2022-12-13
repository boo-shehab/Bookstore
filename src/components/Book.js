import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeBook(id));
  };
  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={remove}>Remove</button>
    </>
  );
};
export default Book;
