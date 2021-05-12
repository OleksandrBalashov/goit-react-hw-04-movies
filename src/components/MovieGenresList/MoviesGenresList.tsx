import React from 'react';
import './MovieGenresList.scss';

interface Props {
  genres: (number & string)[] | null;
}

const MoviesGenresList = ({ genres }: Props) => (
  <ul className="GenresNamesList">
    {genres &&
      genres.map(({ id, name }) => (
        <li key={id} className="GenresItem">
          {name}
        </li>
      ))}
  </ul>
);

export default MoviesGenresList;
