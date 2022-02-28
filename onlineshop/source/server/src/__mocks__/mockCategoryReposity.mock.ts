import { Product } from '../entity/product.entity';
import { Category } from '../entity/category.entity';

export const mockList = [
  {
    categoryId: 1,
    name: 'Jacket',
    products: [new Product(1, 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
  },
  {
    categoryId: 2,
    name: 'Trench coats',
    products: [new Product(1, 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
  },
];
export const mockCategoryRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(category => {
    if (!category.categoryId) {
      mockList.push({ categoryId: mockList.length + 1, ...category, products: [] });
      return mockList[mockList.length - 1];
    }
    const index = mockList.findIndex(item => item.categoryId === category.categoryId);
    mockList[index] = category;

    return mockList[index];
  }),
  findOne: jest.fn().mockImplementation((id: number) => mockList.find(el => el.categoryId === id) || null),
  find: jest.fn().mockImplementation(() => mockList),
  delete: jest.fn().mockImplementation(),
};
