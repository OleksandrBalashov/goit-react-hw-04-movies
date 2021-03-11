import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../../routes';

const MoviesList = ({ movies, options: { url, logo_sizes, base_url } }) => (
  <ul className="ListMovies">
    {movies.map(({ id, title, poster_path }) => {
      const imgSrc = `${base_url}${logo_sizes}${poster_path}`;
      return (
        <li key={id} className="ListMoviesItem">
          <NavLink to={`${routes.movies}/${id}`} className="LinkMovies">
            <img src={imgSrc} alt={title} />
          </NavLink>
        </li>
      );
    })}
  </ul>
);

export default MoviesList;
