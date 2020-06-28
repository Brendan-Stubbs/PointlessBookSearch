import "./BookItem.css";
import React from "react";

const BookItem = ({ book, onBookSelect }) => {
  const img = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.smallThumbnail
    : "https://dpcpa.com/wp-content/uploads/2015/01/thumbnail-default.jpg";
  return (
    <div className="item book-item" onClick={() => onBookSelect(book)}>
      <img
        className="ui centered image small-image"
        src={img}
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
