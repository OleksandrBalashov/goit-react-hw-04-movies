import React from 'react';
import PropTypes from 'prop-types';
import MoviesGenresList from '../MovieGenresList';
import './MovieFields.scss';

const MovieFields = ({
  realise,
  average,
  options: { genres, title, overview },
}) => (
  <div className="WrapMovieFields">
    <h2 className="MovieTitle MarginPadding">{`${title} (${realise})`}</h2>
    <div className="MovieScore MarginPadding">
      <span className="MovieScoreText">User Score: </span>
      <span className="MovieScorePoint">{`${average}%`}</span>
    </div>
    <h4 className="MovieDescr MarginPadding">Genres:</h4>
    <MoviesGenresList genres={genres} />
    <div>
      <h4 className="MarginPadding MovieDescr">Overview: </h4>
      <p className="MarginPadding MovieOverview">{overview}</p>
    </div>
  </div>
);

MovieFields.propTypes = {
  realise: PropTypes.string.isRequired,
  average: PropTypes.number.isRequired,
  options: PropTypes.shape({
    genres: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieFields;
