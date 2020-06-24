import "./BookItem.css";
import React from "react";

const BookItem = ({ book, onBookSelect }) => {
  return (
    <div className="item book-item" onClick={() => onBookSelect(book)}>
      <img
        className="ui centered image small-image"
        src={book.volumeInfo.imageLinks.smallThumbnail}
        alt={book.volumeInfo.title}
      />
      <div className="content">
        <div className="header">{book.volumeInfo.title}</div>
        <div>{book.volumeInfo.authors}</div>
      </div>
    </div>
  );
};

export default BookItem;
