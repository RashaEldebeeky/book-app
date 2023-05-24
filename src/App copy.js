import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Search from "./Search";
import BookList from "./BookList";
import { Route } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books });
  }

  changeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((prevstate) => {
        let books = [...prevstate.books];
        const index = books.findIndex((_book) => _book.id === book.id);
        book.shelf = shelf;
        if (index > -1) {
          books[index] = book;
          return { books };
        } else return { books: [...books, book] };
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              books={this.state.books}
              changeShelf={(book, shelf) => this.changeShelf(book, shelf)}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <Search
              books={this.state.books}
              changeShelf={(book, shelf) => this.changeShelf(book, shelf)}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;