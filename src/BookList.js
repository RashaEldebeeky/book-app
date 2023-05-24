import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

function BookList(props) {
  const { books, changeShelf } = props;
  const bookShelves = [
    { key: "currentlyReading", title: "Currently Reading" },
    { key: "wantToRead", title: "Want to Read" },
    { key: "read", title: "Read" },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {bookShelves.map((shelf) => (
          <BookShelf
            key={shelf.key}
            title={shelf.title}
            books={books.filter((book) => book.shelf === shelf.key)}
            changeShelf={(book, _shelf) => changeShelf(book, _shelf, shelf.key)}
          />
        ))}
      </div>
      <Link to="/search" className="open-search">
        <button type="button" />
      </Link>
    </div>
  );
}
export default BookList;
