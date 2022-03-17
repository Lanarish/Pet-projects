import { Category } from '../entity/category.entity';

export const mockList = [
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
      mockList.push({ id: mockList.length + 1, ...product });
      return mockList[mockList.length - 1];
    }
    const index = mockList.findIndex(item => item.id === product.id);
    mockList[index] = product;
    return mockList[index];
  }),
  findOne: jest.fn().mockImplementation((id: string) => mockList.find(el => el.id === id) || null),

  find: jest.fn().mockImplementation(() => mockList),
  delete: jest.fn().mockImplementation(),
};
