import React from 'react';
import { Container, Typography } from '@mui/material';

import './../styles/Footer.scss';
import image from 'src/assets/picture/1794_oooo.plus.jpg';

const Footer: React.FC = () => (
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
