import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ routes, match = '' }) => (
  <nav>
    <ul className="NavList">
      {routes.map(
        ({ name, path, exact, navLink }) =>
          navLink && (
            <li key={path} className="NavListItem">
              <NavLink
                exact={exact}
                to={`${match}${path}`}
                className="NavLink"
                activeClassName="NavLink--active"
              >
                {name}
              </NavLink>
            </li>
          ),
      )}
    </ul>
  </nav>
);

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      exact: PropTypes.bool.isRequired,
    }),
  ),
  match: PropTypes.string,
};

export default Navigation;
