import React from 'react';
import Navigation from '../Navigation';
import AppRoutes from '../../routes/AppRoutes';
import './AppBar.scss';

const AppBar = () => (
  <header className="HeaderWrap">
    <Navigation routes={AppRoutes} />
  </header>
);

export default AppBar;
