import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, onBookSelect }) => {
  const renderedList = books.map((book) => {
    return <BookItem book={book} key={book.id} onBookSelect={onBookSelect} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default BookList;
