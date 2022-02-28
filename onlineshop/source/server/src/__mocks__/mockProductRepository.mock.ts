import { Category } from '../entity/category.entity';

export const mockList = [
  {
    productId: 1,
    name: 'Jacket',
    description: 'TestDescription',
    color: 'Black',
    size: 'S',
    price: 10000,
    category: new Category(),
  },
  {
    productId: 2,
    name: 'Jacket',
    description: 'TestDescription',
    color: 'Black',
    size: 'S',
    price: 10000,
    category: new Category(),
  },
];

export const mockProductsRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(product => {
    if (!product.productId) {
      mockList.push({ productId: mockList.length + 1, ...product });
      return mockList[mockList.length - 1];
    }
    const index = mockList.findIndex(item => item.productId === product.productId);
    mockList[index] = product;
    return mockList[index];
  }),
  findOne: jest.fn().mockImplementation((id: number) => mockList.find(el => el.productId === id) || null),

  find: jest.fn().mockImplementation(() => mockList),
  delete: jest.fn().mockImplementation(),
};
