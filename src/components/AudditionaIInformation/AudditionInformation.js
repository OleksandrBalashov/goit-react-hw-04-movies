import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Cast from '../Cast';
// import Reviews from '../Reviews';
import './AudditionalInformation.scss';
import Navigation from '../Navigation';
import AudditionalRoutes from '../../routes/AudditionalRoutes';
import NavigationRoute from '../Navigation/NavigationRoute';

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
          <Navigation routes={AudditionalRoutes} match={url} />
        </div>
      </div>

      {/* <Switch>
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
      </Switch> */}
      <NavigationRoute
        routes={AudditionalRoutes}
        match={path}
        options={{ base_url, logo_sizes }}
      />
    </>
  );
};

AudditionInformation.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.objectOf(PropTypes.string).isRequired,
  }),
};

export default withRouter(AudditionInformation);
