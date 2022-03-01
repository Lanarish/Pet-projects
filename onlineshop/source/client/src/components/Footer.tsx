import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

import image from 'src/assets/picture/1794_oooo.plus.jpg';

const FooterContainer = styled('footer')({
  position: 'relative',
  width: '100%',
  margin: 'auto 0 0 0',
  padding: '0 0 30px 0',
  backgroundColor: 'rgba(172, 123, 108, 0.714)',
});

function Copyright() {
  return (
    <Typography variant="body2" display="block" color="rgba(102, 101, 100, 0.808)">
      &copy;&nbsp; All rights reserved
    </Typography>
  );
}

const LogoImage = styled('img')({
  marginTop: '5px',
  marginRight: '5px',
  width: '40px',
});

const Footer: React.FC = () => (
  <FooterContainer>
    <Container>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <LogoImage src={image} alt="Runo brand" />
        <Typography variant="h6" component="div" color="rgba(102, 101, 100, 0.808)">
          RUNO RUS
        </Typography>
      </Box>
      <Copyright />
    </Container>
  </FooterContainer>
);

export default Footer;
