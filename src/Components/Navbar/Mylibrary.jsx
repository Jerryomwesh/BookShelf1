import React, {useEffect, useState} from 'react';
import Book from '../Book/Book';
import './Mylibrary.css';


const Mylibrary = () => {
  const [books, setBooks] = useState([]);
  useEffect (() =>{
    fetch ("http://localhost:3000/books")
    .then (response=> {
      if (!response.ok) {
        throw new Error("Failed to fecth books");
      }
      return response.json();
    })
      .then(data => setBooks(data))
      .catch(error => console.error("Error fetching books:", error));
    }, []);

    const handleDeleteBook = (id) => {
      fetch(`http://localhost:3000/books/${id}`, {
        method: 'DELETE',
      })
      .then(response => {
        if (response.ok) {
          setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
        } else {
          throw new Error("Failed to delete book");
        }
      })
      .catch(error => console.error("Error deleting book:", error));
    };
     
    return (
      <div className="mylibrary">
        <h2>My Library</h2>
        <div className="book-list">
           {books.map(book => (
            <Book key={book.id} book={book} onDelete={() => handleDeleteBook(book.id)} />
           ))}
        </div>
      </div>
    )
  };


  export default Mylibrary;
