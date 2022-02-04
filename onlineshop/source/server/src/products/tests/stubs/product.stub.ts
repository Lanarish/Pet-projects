import { Product } from 'entity/product.entity';

export const productStub = (): Product => ({
  productId: '1',
  name: 'Leather jacket',
  description: 'Perfect jacket',
  size: 'S',
  color: 'black',
  price: 10000,
  categoryId: 1,
});
