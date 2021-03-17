import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';
import AudditionalRoutes from '../../routes/AudditionalRoutes';
import NavigationRoute from '../Navigation/NavigationRoute';
import './AudditionalInformation.scss';

const AudditionalInformation = props => {
  const {
    options: { base_url, logo_sizes },
  } = props;

  const { url, path } = props.match;

  return (
    <>
      <div className="AudditionalWrap">
        <h3 className="AudditionaTitle">Audditional information:</h3>
        <div className="AudditionalWrapLink">
          <Navigation routes={AudditionalRoutes} match={url} />
        </div>
      </div>

      <NavigationRoute
        routes={AudditionalRoutes}
        match={path}
        options={{ base_url, logo_sizes }}
      />
    </>
  );
};

AudditionalInformation.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.objectOf(PropTypes.string).isRequired,
  }),
};

export default withRouter(AudditionalInformation);
