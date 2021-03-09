import React from 'react';
import { NavLink } from 'react-router-dom';

const MoviesListItem = ({
  options: { id, title, url, logo_sizes, base_url, poster_path },
}) => (
  <li className="ListMoviesItem">
    <NavLink
      to={`${url}movies/${id}`}
      className="LinkMovies"
      //   activeClassName="LinkMovies--active"
    >
      <img src={`${base_url}${logo_sizes}${poster_path}`} alt={title} />
    </NavLink>
  </li>
);

export default MoviesListItem;
