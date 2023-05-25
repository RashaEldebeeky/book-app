import React, { useState, useMemo } from "react";
import * as BooksAPI from "../services/booksService";
import "./App.css";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import throttle from "lodash.throttle";
import { useSelector } from "react-redux";
import { booksSelector } from "../state-management/selectors/books.selectors";

export default function Search() {
  const books = useSelector(booksSelector);
  const [searchValue, setSearchValue] = useState("");
  const [booksMatched, setBooksMatched] = useState([]);

  const searchBooks = (value) => {
    setSearchValue(value);
    searchBooksthrottled(value);
  };
  const searchBooksthrottled = useMemo(
    // throttle api search calls
    () =>
      throttle((value) => {
        if (value !== "") {
          BooksAPI.search(value)
            .then((booksMatched) => {
              if (booksMatched !== undefined && booksMatched.length > 0) {
                return booksMatched.map((book) => {
                  const index = books.findIndex(
                    (_book) => _book.id === book.id
                  );
                  if (index > -1) book.shelf = books[index].shelf;
                  return book;
                });
              } else return [];
            })
            .then((booksMatched) => setBooksMatched(booksMatched));
        } else setBooksMatched([]);
      }, 300),
    [books]
  );

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={searchValue}
            onChange={(event) => searchBooks(event.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksMatched.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
