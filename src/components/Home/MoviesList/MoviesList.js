import React from 'react';
import { NavLink } from 'react-router-dom';
import routers from '../../../routes';

const MoviesList = ({ movies, options: { url, logo_sizes, base_url } }) => (
  <ul className="ListMovies">
    {movies.map(({ id, title, poster_path }) => (
      <li key={id} className="ListMoviesItem">
        <NavLink to={`${routers.movies}/${id}`} className="LinkMovies">
          <img src={`${base_url}${logo_sizes}${poster_path}`} alt={title} />
        </NavLink>
      </li>
    ))}
  </ul>
);

export default MoviesList;
