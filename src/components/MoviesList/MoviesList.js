import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import routes from '../../routes';
import AppRoutes from '../../routes/AppRoutes';
import '../MoviesList/MoviesList.scss';

const defaultSrc = 'https://media.comicbook.com/files/img/default-movie.png';

const MoviesList = ({
  location,
  options: { results, logo_sizes, base_url },
}) => (
  <ul className="ListMovies">
    {results.map(({ id, title, poster_path }) => {
      const imgSrc = `${base_url}${logo_sizes}${poster_path}`;

      const { path } = AppRoutes[1];

      return (
        <li key={id} className="ListMoviesItem">
          <NavLink
            to={{
              pathname: `${path}/${id}`,
              state: {
                from: location,
              },
            }}
            className="LinkMovies"
          >
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
  options: PropTypes.shape({
    results: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        poster_path: PropTypes.string,
      }),
    ),
    logo_sizes: PropTypes.string.isRequired,
    base_url: PropTypes.string.isRequired,
  }),
};

export default withRouter(MoviesList);
