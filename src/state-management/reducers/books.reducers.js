import { CHANGE_SHELF, SET_BOOKS } from "../actions/books.actions";
const initialState = {
  books: [],
};
export const booksReducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
      };
    case CHANGE_SHELF:
      const book = action.payload.book;
      const books = state.books;
      const index = books.findIndex((_book) => _book.id === book.id);
      book.shelf = action.payload.shelf;
      if (index > -1) {
        books[index] = book;
        return { ...state, books: [...books] };
      } else return { ...state, books: [...books, book] };

    default:
      return state;
  }
};
