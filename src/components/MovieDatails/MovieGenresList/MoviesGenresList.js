import React from 'react';
import './MovieGenresList.scss';

const MoviesGenresListItem = ({ genres }) => (
  <ul className="GenresNamesList">
    {genres.map(({ name }) => (
      <li key={name} className="GenresItem">
        {name}
      </li>
    ))}
  </ul>
);

export default MoviesGenresListItem;
