import React, { ReactNode } from 'react';
import './Layout.scss';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div className="Layout">
      <div className="Wrapper">{children}</div>
    </div>
  );
};

export default Layout;
