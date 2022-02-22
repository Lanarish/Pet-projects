import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Product } from '../entity/product.entity';

import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let service: ProductsService;

  const mockProductsRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest.fn().mockImplementation(product => Promise.resolve({ id: Date.now(), ...product })),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useValue: mockProductsRepository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should create a product and return that', async () => {
    const dto = {
      name: 'Jacket',
      description: 'Some text',
      size: 'S',
      color: 'Black',
      price: 10000,
      category: 1,
    };
    expect(await service.create(dto)).toEqual({ id: expect.any(Number), ...dto });
  });
  //   describe('Test getAll function', () => {
  //     it('Should return promise', () => {
  //       const result = service.findAll();
  //       expect(result).toBeInstanceOf(Promise);
  //     });
  //   });

  //   describe('Test getOne function', () => {
  //     it('Should return product', () => {
  //       service.create({
  //         name: 'Jacket',
  //         description: 'Some text',
  //         size: 'S',
  //         color: 'Black',
  //         price: 10000,
  //         category: {
  //           categoryId: 1,
  //           name: 'Jackets',
  //         },
  //       });
  //     });
  //   });
});
