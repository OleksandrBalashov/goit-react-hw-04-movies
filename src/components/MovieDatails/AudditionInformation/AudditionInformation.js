import React from 'react';
import { NavLink, withRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
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

AudditionInformation.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.objectOf(PropTypes.string).isRequired,
  }),
};

export default withRouter(AudditionInformation);
