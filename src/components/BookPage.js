import React from 'react';
import BookItem from './BookItem';
import AddForm from './Form';
import { useSelector } from 'react-redux';

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  return (
    <div>
      {
        myBooks.map(
          (book) => (<BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            category={book.category}
          />),
        )
      }
      <AddForm />
    </div>
  );
}

export default BookPage;