import React from 'react';
import { NavLink, withRouter, Switch, Route } from 'react-router-dom';
import Cast from '../../Cast';
import Reviews from '../../Reviews';
import './AudditionalInformation.scss';

const AudditionInformation = props => {
  const {
    options: { base_url, logo_sizes },
  } = props;

  const { url, path } = props.match;

  return (
    <>
      <div className="CastWrap">
        <h3 className="CastTitle">Audditional information:</h3>
        <div className="LinkCastWrap">
          <NavLink
            to={`${url}/cast`}
            className="LinkCast"
            activeClassName="LinkCast--active"
          >
            Cast
          </NavLink>
          <NavLink
            to={`${url}/reviews`}
            className="LinkCast"
            activeClassName="LinkCast--active"
          >
            Reviews
          </NavLink>
        </div>
      </div>

      <Switch>
        <Route
          path={`${path}/cast`}
          render={props => (
            <Cast {...props} options={{ base_url, logo_sizes }} />
          )}
        />
        <Route
          path={`${path}/reviews`}
          render={props => <Reviews {...props} />}
        />
      </Switch>
    </>
  );
};

export default withRouter(AudditionInformation);
