import React from "react";

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>
        <img
          className="ui small center image"
          src={book.volumeInfo.imageLinks.thumbnail}
          alt=""
        />
      </div>
      <h4 className="ui header">{book.volumeInfo.title}</h4>
      <h5 className="ui header">{book.volumeInfo.authors}</h5>
      <p className="ui body">{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
