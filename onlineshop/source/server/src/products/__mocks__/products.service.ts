import { productStub } from '../tests/stubs/product.stub';

export const ProductsService = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(productStub()),
  findAll: jest.fn().mockResolvedValue([productStub()]),
  create: jest.fn().mockResolvedValue(productStub()),
  update: jest.fn().mockResolvedValue(productStub()),
  remove: jest.fn().mockResolvedValue(productStub()),
});
