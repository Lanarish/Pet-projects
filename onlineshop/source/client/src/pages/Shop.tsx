import React, { useEffect, useState } from 'react';

import ProductCard from 'src/components/ProductCard';
import { IProduct } from 'src/interfaces/index';
import './../styles/Shop.scss';

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:3001/api/products', {
          method: 'GET',
        });
        if (response.ok) {
          const json = await response.json();
          setProducts(json);
        } else {
          throw new Error('Something went wrong ...');
        }
      } catch (error) {
        throw new Error('ERROR');
      }
    };
    getAllProducts();
  }, []);
  return (
    <div className="container">
      <div className="list">
        {products?.length &&
          products.map((product: IProduct) => (
            <ProductCard
              key={product.id}
              name={product.name}
              description={product.description}
              color={product.color}
              size={product.size}
              price={product.price}
              categoryId={product.categoryId}
            />
          ))}
      </div>
    </div>
  );
}
export default Shop;
