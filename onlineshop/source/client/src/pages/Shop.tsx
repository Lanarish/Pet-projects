import React, { useEffect, useState } from 'react';

import ProductCard from 'src/components/ProductCard';
import { IProduct } from 'src/interfaces/products';
import './../styles/Shop.scss';
import { getAllProducts } from 'src/api/productsAPI';

function Shop() {
  const [products, setProducts] = useState<[IProduct] | []>([]);

  const getProducts = async () => {
    const response = await getAllProducts();
    setProducts(response);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="list">
      {products?.map((product: IProduct) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default Shop;
