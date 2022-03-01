import React from 'react';
import { CardMedia } from '@mui/material';

import image from 'src/assets/picture/Collage.jpg';
import './../styles/MainPage.scss';

function MainPage() {
  return (
    <>
      <div className="container">
        <CardMedia className="photo" component="img" image={image} alt="Leather jacket" />
        <div className="text">Premium quality for your outfit...</div>
      </div>
    </>
  );
}

export default MainPage;
