import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = ({ routes, match = '' }) => (
  <ul className="NavList">
    {routes.map(({ name, path, exact }) => (
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
    ))}
  </ul>
);

export default Navigation;
