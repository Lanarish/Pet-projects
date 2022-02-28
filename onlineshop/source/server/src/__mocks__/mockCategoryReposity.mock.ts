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
const categoryItem = {
  categoryId: mockList[0].categoryId,
  name: 'Jacket',
  products: [new Product(1, 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
};
export const mockCategoryRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(category => {
    if (!category.categoryId) {
      mockList.push({ categoryId: 3, ...category });
      return mockList[2];
    }
    const index = mockList.findIndex(item => item.categoryId === category.categoryId);
    mockList[index] = category;
    return mockList[0];
  }),
  findOne: jest.fn().mockImplementation((id: number) => {
    if (mockList.some(object => object.categoryId === id)) {
      return categoryItem;
    }
    return null;
  }),
  find: jest.fn().mockImplementation(() => [
    {
      categoryId: 1,
      name: 'Jacket',
      products: [new Product(1, 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
    },
  ]),
  delete: jest.fn().mockImplementation(),
};
