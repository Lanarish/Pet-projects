import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import image from 'src/assets/picture/Leather_jacket.jpg';
import './../styles/ProductCard.scss';
import { IProduct } from 'src/interfaces/products';

interface IProductProps {
  product: IProduct;
}
const ProductCard: React.FC<IProductProps> = ({ product }) => (
  <Card className="card">
    <CardMedia className="photo" component="img" image={image} alt="Leather jacket" />
    <CardContent className="card_content">
      <Typography className="title" gutterBottom variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography>Price: {product.price} RUB</Typography>
    </CardContent>
    <CardActions>
      <Button className="button_buy">BUY</Button>
      <Button className="button_more">LEARN MORE</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
