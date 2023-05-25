import thunk from "redux-thunk";
import books from "./book.effects";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, books);
