import { Product } from '../entity/product.entity';
import { Category } from '../entity/category.entity';

export const mockList = [
  {
    id: '1',
    name: 'Jacket',
    products: [new Product('1', 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
  },
  {
    id: '2',
    name: 'Trench coats',
    products: [new Product('1', 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
  },
];
export const mockCategoryRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(category => {
    if (!category.id) {
      mockList.push({ id: mockList.length + 1, ...category, products: [] });
      return mockList[mockList.length - 1];
    }
    const index = mockList.findIndex(item => item.id === category.id);
    mockList[index] = category;

    return mockList[index];
  }),
  findOne: jest.fn().mockImplementation((id: string) => mockList.find(el => el.id === id) || null),
  find: jest.fn().mockImplementation(() => mockList),
  delete: jest.fn().mockImplementation(),
};
