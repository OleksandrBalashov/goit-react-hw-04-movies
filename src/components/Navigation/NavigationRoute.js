import React from 'react';
import { Route, Switch } from 'react-router-dom';

const NavigationRoute = ({ routes, match = '' }) => {
  return (
    <Switch>
      {routes.map(({ exact, path, component: MyComponent }) => (
        <Route />
      ))}
    </Switch>
  );
};

export default NavigationRoute;
