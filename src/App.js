import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import MoviesPage from './views/MoviesPage';
// import ErrorPage from './views/ErrorPage';
// import routes from './routes';
import AppBar from './components/AppBar';
import './styles/styles.scss';
import NavigationRoute from './components/Navigation/NavigationRoute';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <>
      <AppBar />
      <NavigationRoute routes={AppRoutes} />
      {/* <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route path={routes.movieDetail} component={MovieDetailsPage} />
        <Route path={routes.movie} component={MoviesPage} />
        <Route component={ErrorPage} />
      </Switch> */}
    </>
  );
};

export default App;
