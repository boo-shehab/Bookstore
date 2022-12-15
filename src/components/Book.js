import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook, removeBookOne } from '../redux/books/books';

const Book = ({ book }) => {
  // eslint-disable-next-line camelcase
  const {
    item_id: id, title, category, author,
  } = book;
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
      <div className="book">
        <div className="book-content">
          <div className="book-info">
            <h4 className="book-category">{category}</h4>
            <h2 className="book-title">{title}</h2>
            <h6 className="book-author">{author}</h6>

            <div className="action-buttons">
              <button className="button-outline" type="button">Comments</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button" onClick={remove}>Remove</button>
              <div className="vertical-divider" />
              <button className="button-outline" type="button">Edit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};
export default Book;
