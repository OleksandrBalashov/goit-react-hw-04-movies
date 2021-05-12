import React from 'react';
import MoviesGenresList from '../MovieGenresList';
import './MovieFields.scss';

interface Props {
  realise: string;
  average: number;
  options: {
    genres: (string & number)[] | null;
    title: string;
    overview: string;
  };
}

const MovieFields = ({
  realise,
  average,
  options: { genres, title, overview },
}: Props) => (
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

export default MovieFields;
