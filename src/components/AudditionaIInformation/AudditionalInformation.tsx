import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Navigation from '../Navigation';
import AudditionalRoutes from '../../routes/AudditionalRoutes';
import NavigationRoute from '../Navigation/NavigationRoute';
import './AudditionalInformation.scss';

interface Props extends RouteComponentProps {
  options: {
    base_url: string;
    logo_sizes: string;
  };
}

const AudditionalInformation = (props: Props) => {
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

export default withRouter(AudditionalInformation);
