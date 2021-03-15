import React from 'react';
import PropTypes from 'prop-types';
import './MovieGenresList.scss';

const MoviesGenresList = ({ genres }) => (
  <ul className="GenresNamesList">
    {genres.map(({ id, name }) => (
      <li key={id} className="GenresItem">
        {name}
      </li>
    ))}
  </ul>
);

MoviesGenresList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default MoviesGenresList;
