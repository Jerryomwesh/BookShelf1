import React from 'react';
import './Book.css';

function Book({ book, onDelete }) {

  return (
    <div className="book-card">

      <img src={book.image} alt={`${book.title} cover`} />
      <h3>{book.title}</h3>
      <p>by {book.author}</p>

      <div className="book-actions">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Book;
