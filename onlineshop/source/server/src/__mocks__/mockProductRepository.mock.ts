import { Category } from '../entity/category.entity';

export const mockProductList = [
  {
    id: '1',
    name: 'Jacket',
    description: 'TestDescription',
    color: 'Black',
    size: 'S',
    price: 10000,
    category: new Category(),
  },
  {
    id: '2',
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
    if (!product.id) {
      mockProductList.push({ id: mockProductList.length + 1, ...product });
      return mockProductList[mockProductList.length - 1];
    }
    const index = mockProductList.findIndex(item => item.id === product.id);
    mockProductList[index] = product;
    return mockProductList[index];
  }),
  findOne: jest.fn().mockImplementation((id: string) => mockProductList.find(el => el.id === id) || null),

  find: jest.fn().mockImplementation(() => mockProductList),
  delete: jest.fn().mockImplementation(),
};
