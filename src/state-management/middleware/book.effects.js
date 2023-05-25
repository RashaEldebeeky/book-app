import { CHANGE_SHELF } from "../actions/books.actions";
import * as BooksAPI from "../../services/booksService";

const books = () => (next) => (action) => {
  switch (action.type) {
    case CHANGE_SHELF:
      BooksAPI.update(action.payload.book, action.payload.shelf);
      break;
    default:
      break;
  }
  return next(action);
};

export default books;
