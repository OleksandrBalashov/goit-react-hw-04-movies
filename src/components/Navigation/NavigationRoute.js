import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Spinner from '../Spinner';

const NavigationRoute = ({ routes, match = '', ...options }) => {
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        {routes.map(({ name, exact, path, component: MyComponent }) => {
          if (name === 'Error') {
            return <Route key={path} render={() => <MyComponent />} />;
          }
          return (
            <Route
              key={path}
              exact={exact}
              path={`${match}${path}`}
              render={props => <MyComponent {...props} {...options} />}
            />
          );
        })}
      </Switch>
    </Suspense>
  );
};

export default NavigationRoute;
