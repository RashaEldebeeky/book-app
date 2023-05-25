import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import { useSelector } from "react-redux";
import { booksSelector } from "../state-management/selectors/books.selectors";

export default function BookList() {
  const books = useSelector(booksSelector);

  const shelves = [
    { id: "currentlyReading", title: "Currently Reading" },
    { id: "wantToRead", title: "Want to Read" },
    { id: "read", title: "Read" },
  ];
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        {shelves.map((shelf) => (
          <div key={shelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.title}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid" key={shelf.id}>
                {books
                  .filter((book) => book.shelf === shelf.id)
                  .map((book) => (
                    <li key={book.id}>
                      <BookCard book={book} />
                    </li>
                  ))}
              </ol>
            </div>
          </div>
        ))}
      </div>
      <Link to="/search" className="open-search">
        <button type="button" />
      </Link>
    </div>
  );
}
