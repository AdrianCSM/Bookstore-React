import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

  const {
    id,
    title,
    author,
    category,
  } = props;
  const dispatch = useDispatch();
  const remove = () => dispatch(removeBook(id));

function BookItem() {
  return (
    <div className="BookContainer">
      <div className="TitleContainer">
        <p className="Genre" value={category}>{category}</p>
        <p className="BookTitle">{title}</p>
        <p className="BookAuthor">{author}</p>
        <button type="button" className="Remove" onClick={remove}>Remove</button>
      </div>
      <div className="graphContainer">
        <div className="percentageContainer" />
        <div className="graphParagraph">
          <p className="percentage">64%</p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="progressContainer">
        <div className="progressContainer" />
        <p>Current Chapter</p>
        <p>Chapter 17</p>
        <button type="button" className="ProgressBtn btn">Update Progress</button>
      </div>
    </div>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default BookItem;