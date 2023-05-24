import React from "react";
import "./App.css";
import BookCard from "./BookCard";

function BookShelf(props) {
  const { title, books, changeShelf } = props;
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <li key={book.id}>
              <BookCard
                title={book.title}
                authors={book.authors}
                shelf={book.shelf}
                imageLinks={book.imageLinks}
                changeShelf={(shelf) => changeShelf(book, shelf)}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default BookShelf;
