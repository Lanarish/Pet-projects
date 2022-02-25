import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import image from 'src/assets/picture/Leather_jacket.jpg';
import { IProps } from 'src/interfaces';
import './../styles/ProductCard.scss';

const ProductCard: React.FC<IProps> = ({ name, price }) => (
  <Card className="card">
    <CardMedia className="photo" component="img" image={image} alt="Leather jacket" />
    <CardContent className="card_content">
      <Typography className="title" gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <Typography>Price: {price} RUB</Typography>
    </CardContent>
    <CardActions>
      <Button className="button_buy">BUY</Button>
      <Button className="button_more">LEARN MORE</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
