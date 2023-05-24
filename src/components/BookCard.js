import React from "react";
import "./App.css";
import BookShelfChanger from "./BookShelfChanger";
import PropTypes from "prop-types";

function BookCard(props) {
  BookCard.propTypes = {
    title: PropTypes.string.isRequired,
    authors: PropTypes.array.isRequired,
    shelf: PropTypes.string.isRequired,
    imageLinks: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired,
  };
  const { title, authors, shelf, imageLinks, changeShelf } = props;
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
        <BookShelfChanger
          shelf={shelf}
          changeShelf={(shelf) => changeShelf(shelf)}
        />
      </div>
      <div className="book-title">{title}</div>
      <div className="book-authors">{authors && authors.join(",")}</div>
    </div>
  );
}
export default BookCard;
