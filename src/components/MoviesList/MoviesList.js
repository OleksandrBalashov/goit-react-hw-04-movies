import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import routes from '../../routes';
import AppRoutes from '../../routes/AppRoutes';
import '../MoviesList/MoviesList.scss';

const MoviesList = ({ movies, options: { logo_sizes, base_url } }) => (
  <ul className="ListMovies">
    {movies.map(({ id, title, poster_path }) => {
      const imgSrc = `${base_url}${logo_sizes}${poster_path}`;

      const defaultSrc =
        'https://media.comicbook.com/files/img/default-movie.png';

      const { path } = AppRoutes[1];

      return (
        <li key={id} className="ListMoviesItem">
          <NavLink to={`${path}/${id}`} className="LinkMovies">
            <img
              src={poster_path ? imgSrc : defaultSrc}
              alt={title}
              className="MoviesImg"
            />
          </NavLink>
        </li>
      );
    })}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
    }),
  ),

  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MoviesList;
