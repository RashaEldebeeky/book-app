import React, { useEffect } from "react";
import * as BooksAPI from "../services/booksService";
import "./App.css";
import Search from "./Search";
import BookList from "./BookList";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBooks } from "../state-management/actions/books.actions";

export default function BooksApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    BooksAPI.getAll().then((books) => dispatch(setBooks(books)));
  });

  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<BookList />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}
