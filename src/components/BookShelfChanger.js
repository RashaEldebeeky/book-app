import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import { changeShelf } from "../state-management/actions/books.actions";

function BookShelfChanger(props) {
  const dispatch = useDispatch();

  const { book } = props;
  const shelfValue = book.shelf ? book.shelf : "none";
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) =>
          dispatch(changeShelf({ book, shelf: event.target.value }))
        }
        value={shelfValue}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}
export default BookShelfChanger;
