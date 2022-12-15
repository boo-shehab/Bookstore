import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, addBookOne } from '../redux/books/books';
import './form.css';

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

    <section>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form className="add-form" onSubmit={newBook}>
        <input type="text" name="title" className="input title-input" value={book.title} placeholder="Book title" required onChange={handleChange} />
        <input type="text" name="title" className="input author-input" value={book.author} placeholder="Book author" required onChange={handleChange} />
        <button className="primary-button-big" type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};
export default Form;
