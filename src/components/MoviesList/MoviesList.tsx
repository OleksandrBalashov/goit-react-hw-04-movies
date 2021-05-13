import React from 'react';
import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';
import AppRoutes from '../../routes/AppRoutes';
import '../MoviesList/MoviesList.scss';
import { ResultsType } from '../../interfacesTypes/interfaces';

const defaultSrc = 'https://media.comicbook.com/files/img/default-movie.png';

interface Props extends RouteComponentProps {
  options: {
    results: ResultsType[];
    logo_sizes: string;
    base_url: string;
  };
}

const MoviesList = ({
  location,
  options: { results, logo_sizes, base_url },
}: Props) => (
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

export default withRouter(MoviesList);
