import React from 'react';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <div className="Wrapper">{children}</div>
    </div>
  );
};

export default Layout;
