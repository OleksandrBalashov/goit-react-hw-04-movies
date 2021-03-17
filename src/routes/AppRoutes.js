// import ErrorPage from '../views/ErrorPage';
import HomePage from '../views/HomePage';
import MovieDetailsPage from '../views/MovieDetailsPage';
import MoviesPage from '../views/MoviesPage';

const AppRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    route: true,
    navLink: true,
    component: HomePage,
  },
  {
    name: 'Movies',
    path: '/movies',
    exact: true,
    route: true,
    navLink: true,
    component: MoviesPage,
  },
  {
    name: 'MovieDetailes',
    path: '/movies/:movieId',
    exact: true,
    navLink: false,
    route: true,
    component: MovieDetailsPage,
  },
  // {
  //   name: 'Error',
  //   path: null,
  //   exact: null,
  //   navLink: false,
  //   route: true,
  //   component: ErrorPage,
  // },
];

export default AppRoutes;
