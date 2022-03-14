import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

import './../styles/Footer.scss';
import image from 'src/assets/picture/1794_oooo.plus.jpg';

const Footer: React.FC = () => (
  //   const location = useLocation();
  //   if (location.pathname.includes('support')) {
  //     return (
  //       <Link to="/" className="link-footer">
  //         Back to main page
  //       </Link>
  //     );
  //   }
  <div className="footer-container">
    <Container>
      <img className="logo-image" src={image} alt="Runo brand" />
      <Typography variant="body2" display="block" color="rgba(102, 101, 100, 0.808)">
        &copy;&nbsp; All rights reserved
      </Typography>
    </Container>
  </div>
);
export default Footer;
