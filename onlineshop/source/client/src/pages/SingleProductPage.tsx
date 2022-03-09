import { Card, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getOneProduct } from 'src/api/productsAPI';
import { IProduct } from 'src/interfaces/products';
import Loader from 'src/components/Loader';
import './../styles/SingleProductCard.scss';
import image from 'src/assets/picture/Leather_jacket.jpg';

import NotFoundPage from './NotFoundPage';

const ProductPage = () => {
  const { id } = useParams();
  const [error, setError] = useState<unknown>();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<IProduct>();
  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await getOneProduct(id);
      setProduct(response);
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(e);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        product && (
          <Card className="singleProductCard">
            <Grid item md={6} xs={12}>
              <CardMedia className="photo" component="img" image={image} alt="Leather jacket" />
            </Grid>
            <Grid item xs={6} className="description">
              <Typography gutterBottom variant="h4" component="div">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h6">
                Price: {product.price} RUB{' '}
              </Typography>
              <Typography>Description: {product.description} </Typography>
              <Typography>Size: {product.size} </Typography>
              <Typography>Color: {product.color} </Typography>
              <Typography>Category: {product.category.name} </Typography>
            </Grid>
          </Card>
        )
      )}
    </div>
  );
};

export default ProductPage;
