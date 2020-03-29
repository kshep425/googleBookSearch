import React from 'react';

const BookList = (props) => {
  let books = []
  books = props.books
  if (books) {
    books = books.data
    if (books) {
      console.log(books);
      return (
        <div>
          <h1> BookList</h1>
          <ul>
            {books.map((book) => (<li key={book._id}>{book.title}</li>))}
          </ul>
        </div>
      )
    }
  }

  return (
    <div>
      <h1> BookList</h1>
      <ul>
        <li>book</li>
      </ul>
    </div>
  )
};

export default BookList;