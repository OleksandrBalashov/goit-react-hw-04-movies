import React from 'react';
import { NavLink } from 'react-router-dom';

const MoviesListItem = ({ title, options, id }) => (
  <li>
    <NavLink
      to={`${options}movies/${id}`}
      className="LinkMovies"
      activeClassName="LinkMovies--active"
    >
      {title}
    </NavLink>
  </li>
);
export default MoviesListItem;
