import React from 'react';
import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddForm from './Form';

function BookPage() {
  const myBooks = useSelector((store) => store.booksReducer);
  return (
    <div>
      {
        myBooks.map(
          (book) => (<BookItem // eslint-disable-line
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