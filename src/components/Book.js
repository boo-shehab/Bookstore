import React from 'react';

/* eslint-disable react/prop-types */
const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button">Remove</button>
    </>
  );
};
export default Book;
