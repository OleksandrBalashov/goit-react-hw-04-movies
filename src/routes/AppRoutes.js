import { lazy } from 'react';

const AppRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../views/HomePage' /* webpackChunkName: "HomeView" */),
    ),
  },
  {
    name: 'Movies',
    path: '/movies',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../views/MoviesPage' /* webpackChunkName: "MoviesView" */),
    ),
  },
  {
    name: 'MovieDetailes',
    path: '/movies/:movieId',
    exact: false,
    navLink: false,
    component: lazy(() =>
      import(
        '../views/MovieDetailsPage' /* webpackChunkName: "MovieDetailesView" */
      ),
    ),
  },
  {
    name: 'Error',
    exact: false,
    path: ' ',
    navLink: false,
    component: lazy(() =>
      import('../views/ErrorPage' /* webpackChunkName: "ErrorView" */),
    ),
  },
];

export default AppRoutes;
