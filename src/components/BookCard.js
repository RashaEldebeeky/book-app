import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

function BookCard(props) {
  BookCard.propTypes = {
    book: PropTypes.object.isRequired,
  };
  const { title, authors, imageLinks } = props.book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:
              imageLinks && imageLinks.smallThumbnail
                ? `url(${imageLinks.smallThumbnail})`
                : ``,
          }}
        />
        <BookShelfChanger book={props.book} />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(",")}</div>
    </div>
  );
}
export default BookCard;
