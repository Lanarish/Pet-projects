import { Category } from '../entity/category.entity';

export const mockList = [
  {
    productId: 2,
    name: 'Jacket',
    description: 'TestDescription',
    color: 'Black',
    size: 'S',
    price: 10000,
    category: new Category(),
  },
  {
    productId: 3,
    name: 'Jacket',
    description: 'TestDescription',
    color: 'Black',
    size: 'S',
    price: 10000,
    category: new Category(),
  },
];
const productItem = {
  productId: mockList[0].productId,
  name: 'Jacket',
  description: 'TestDescription',
  color: 'Black',
  size: 'S',
  price: 10000,
  category: new Category(),
};
export const mockProductsRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(product => {
    if (!product.productId) {
      mockList.push({ productId: 4, ...product });
      return mockList[2];
    }
    const index = mockList.findIndex(item => item.productId === product.productId);
    mockList[index] = product;
    return mockList[0];
  }),
  findOne: jest.fn().mockImplementation((id: number) => {
    if (mockList.some(object => object.productId === id)) {
      return productItem;
    }
    return null;
  }),
  find: jest.fn().mockImplementation(() => [productItem]),
  delete: jest.fn().mockImplementation(),
};
