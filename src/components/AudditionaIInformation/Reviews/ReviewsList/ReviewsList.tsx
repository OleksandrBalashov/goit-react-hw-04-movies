import React from 'react';
import { ResultsType } from '../../../../interfacesTypes/interfaces';
import './ReviewsList.scss';

interface PropTypes {
  results: ResultsType[];
}

const ReviewsList = ({ results }: PropTypes) => (
  <ul className="ReviewsList">
    {results.map(({ id, author, content }) => (
      <li key={id} className="ReviewsItem">
        <h3 className="ReviewsAuthor">Author: {author}:</h3>
        <p className="ReviewsContent">{content}</p>
      </li>
    ))}
  </ul>
);

export default ReviewsList;
