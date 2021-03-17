import React from 'react';
import { Route, Switch } from 'react-router-dom';

const NavigationRoute = ({ routes, match = '', ...options }) => {
  return (
    <Switch>
      {routes.map(
        ({ exact, path, route, component: MyComponent }) =>
          route && (
            <Route
              key={path}
              exact={exact}
              path={`${match}${path}`}
              render={props => <MyComponent {...props} {...options} />}
            />
          ),
      )}
    </Switch>
  );
};

export default NavigationRoute;
