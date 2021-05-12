import React from 'react';
import AppBar from './components/AppBar';
import NavigationRoute from './components/Navigation/NavigationRoute';
import AppRoutes from './routes/AppRoutes';
import './styles/styles.scss';

const App = () => {
  return (
    <>
      <AppBar />
      <NavigationRoute routes={AppRoutes} />
    </>
  );
};

export default App;
