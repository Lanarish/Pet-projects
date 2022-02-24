import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import image from 'src/assets/picture/Leather_jacket.jpg';
import { IProps } from 'src/interfaces';
import './../styles/ProductCard.css';

const ProductCard: React.FC<IProps> = ({ name, description, color, size, price, categoryId }) => (
  <Card className="card">
    <CardMedia className="photo" component="img" image={image} alt="Leather jacket" />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <Typography color="text.secondary">{description}</Typography>
      <Typography variant="body2" color="text.secondary">
        Price: {price}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Color: {color}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Size: {size}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Catery: {categoryId.name}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default ProductCard;
