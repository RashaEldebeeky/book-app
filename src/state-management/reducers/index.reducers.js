import { combineReducers } from "redux";
import { booksReducer } from "./books.reducers";

export default combineReducers({
  booksState: booksReducer,
});
