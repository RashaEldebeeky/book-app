import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Link } from "react-router-dom";
import BookCard from "./BookCard";
import throttle from "lodash.throttle";

class Search extends React.Component {
  constructor() {
    super();
    this.searchBooks = this.searchBooks.bind(this);
    this.searchBooksThrottled = throttle(this.searchBooks, 1000);
  }
  state = {
    bookSearch: "",
    booksMatch: [],
  };
  componentWillUnmount() {
    this.searchBooksThrottled.cancel();
  }
  searchBooks(value) {
    if (value !== "") {
      BooksAPI.search(value).then((booksMatch) => {
        if (booksMatch !== undefined && booksMatch.length > 0) {
          booksMatch = booksMatch.map((book) => {
            const index = this.props.books.findIndex(
              (_book) => _book.id === book.id
            );
            if (index > -1) book.shelf = this.props.books[index].shelf;
            return book;
          });
          this.setState({ booksMatch });
        } else this.setState({ booksMatch: [] });
      });
    } else this.setState({ booksMatch: [] });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.search}
              onChange={(event) =>
                this.searchBooksThrottled(event.target.value)
              }
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.booksMatch.map((book) => (
              <li key={book.id}>
                <BookCard
                  title={book.title}
                  authors={book.authors}
                  shelf={book.shelf}
                  imageLinks={book.imageLinks}
                  changeShelf={(shelf) => this.props.changeShelf(book, shelf)}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}
export default Search;
