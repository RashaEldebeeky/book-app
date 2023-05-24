import React from "react";
import "./App.css";

function BookShelfChanger(props) {
  const { shelf, changeShelf } = props;
  const shelfValue = shelf ? shelf : "none";
  return (
    <div className="book-shelf-changer">
      <select
        onChange={(event) => changeShelf(event.target.value)}
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
