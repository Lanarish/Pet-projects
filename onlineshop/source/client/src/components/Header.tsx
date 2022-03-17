import React from 'react';
import { useLocation } from 'react-router-dom';

import NavBar from './NavBar';

function Header() {
  const location = useLocation();
  if (location.pathname.includes('support')) {
    return <></>;
  }
  return <NavBar />;
}

export default Header;
