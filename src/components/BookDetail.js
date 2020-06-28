import React from "react";

const BookDetail = ({ book }) => {
  if (!book) {
    return <div>Loading...</div>;
  }

  const img = book.volumeInfo.imageLinks
    ? book.volumeInfo.imageLinks.thumbnail
    : "https://dpcpa.com/wp-content/uploads/2015/01/thumbnail-default.jpg";
  return (
    <div>
      <div>
        <img className="ui small center image" src={img} alt="" />
      </div>
      <h4 className="ui header">{book.volumeInfo.title}</h4>
      <h5 className="ui header">{book.volumeInfo.authors}</h5>
      <p className="ui body">{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookDetail;
