import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    auther: '',
  });

  const handleChange = (ele) => {
    setBook({
      ...book,
      [ele.target.name]: ele.target.value,
    });
  };

  const newBook = (e) => {
    e.preventDefault();
    if (book.title.trim() !== '' && book.auther.trim() !== '') {
      const newBook = {
        ...book,
        id: Date.now().toString(),
      };
      dispatch(addBook(newBook));
      setBook({
        title: '',
        auther: '',
      });
    }
  };
  return (
    <form>
      <input type="text" name="title" value={book.title} onChange={handleChange} />
      <input type="text" name="auther" value={book.auther} onChange={handleChange} />
      <button type="submit" onClick={newBook}>submit</button>
    </form>
  );
};
export default Form;
