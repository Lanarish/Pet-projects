import { Category } from '../entity/category.entity';

export const mockProductsRepository = {
  create: jest.fn().mockImplementation(dto => dto),
  save: jest.fn().mockImplementation(product => Promise.resolve({ productId: 2, ...product })),
  findOne: jest.fn().mockImplementation((id: number) => {
    if (id === 2) {
      return {
        productId: 2,
        name: 'Jacket',
        description: 'TestDescription',
        color: 'Black',
        size: 'S',
        price: 10000,
        category: new Category(),
      };
    }
    return null;
  }),
  find: jest.fn().mockImplementation(() => [
    {
      productId: 2,
      name: 'Jacket',
      description: 'TestDescription',
      color: 'Black',
      size: 'S',
      price: 10000,
      category: new Category(),
    },
  ]),
  delete: jest.fn().mockImplementation(),
};
