import { Product } from '../entity/product.entity';
import { Category } from '../entity/category.entity';

export const mockCategoryRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(category => Promise.resolve({ categoryId: 1, ...category })),
  findOne: jest.fn().mockImplementation((id: number) => {
    if (id === 1) {
      return {
        categoryId: 1,
        name: 'Jacket',
        products: [new Product(1, 'Jacket', 'TestDescription', 'Black', 'S', 10000, new Category())],
      };
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
