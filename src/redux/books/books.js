const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialBooks = [];

const bookReduser = (state = initialBooks, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((item) => item.payload.id !== action.id);
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookReduser;
export { addBook, removeBook };
