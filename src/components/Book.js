import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookOne } from '../redux/books/books';

const Book = (props) => {
  // eslint-disable-next-line camelcase
  const { title, author, id } = props;
  const dispatch = useDispatch();

  const remove = (e) => {
    e.preventDefault();
    const obj = {
      item_id: id,
    };
    dispatch(removeBook(obj)).then(() => {
      dispatch(removeBookOne(obj));
    });
  };
  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={remove}>Remove</button>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
