import React from 'react';
import PropTypes from 'prop-types';
import './ReviewsList.scss';

const ReviewsList = ({ results }) => (
  <ul className="ReviewsList">
    {results.map(({ id, author, content }) => (
      <li key={id} className="ReviewsItem">
        <h3 className="ReviewsAuthor">Author: {author}:</h3>
        <p className="ReviewsContent">{content}</p>
      </li>
    ))}
  </ul>
);

ReviewsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    }),
  ),
};

export default ReviewsList;
