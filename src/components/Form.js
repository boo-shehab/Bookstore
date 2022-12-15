import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, addBookOne } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const handleChange = (ele) => {
    setBook({
      ...book,
      [ele.target.name]: ele.target.value,
    });
  };

  const newBook = (e) => {
    e.preventDefault();
    if (book.title.trim() !== '' && book.author.trim() !== '') {
      const Book = {
        ...book,
        item_id: Date.now().toString(),
        category: 'Fiction',
      };
      dispatch(addBook(Book)).then(() => dispatch(addBookOne(Book)));
      setBook({
        title: '',
        author: '',
      });
    }
  };
  return (
    <form>
      <input type="text" name="title" value={book.title} onChange={handleChange} />
      <input type="text" name="author" value={book.author} onChange={handleChange} />
      <button type="submit" onClick={newBook}>submit</button>
    </form>
  );
};
export default Form;
