import HomePage from '../views/HomePage';
import MoviesPage from '../views/MoviesPage';

const AppRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'Movies',
    path: '/movies',
    exact: false,
    component: MoviesPage,
  },
];

export default AppRoutes;
