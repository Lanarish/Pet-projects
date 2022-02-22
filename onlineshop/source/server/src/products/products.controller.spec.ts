// import { Test, TestingModule } from '@nestjs/testing';

import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Category } from '../entity/category.entity';
import { Product } from '../entity/product.entity';

import { ProductDto } from './dto/productDto.dto';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  const mockProductsRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest.fn().mockImplementation(product => Promise.resolve({ id: Date.now(), ...product })),
    findOne: jest.fn().mockImplementation(obj => {
      if (obj.where.productId === 2) {
        return {
          productId: 2,
          name: 'Jacket',
          description: 'TestDescription',
          color: 'Black',
          size: 'S',
          price: 1000000,
          category: new Category(),
        };
      }
      return null;
    }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService, { provide: getRepositoryToken(Product), useValue: mockProductsRepository }],
    }).compile();
    controller = module.get<ProductsController>(ProductsController);
  });

  describe('create', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
    it('should create a product', async () => {
      const productDto: ProductDto = {
        name: 'Jacket',
        description: 'TestDescription',
        color: 'Black',
        size: 'S',
        price: 1000000,
        category: new Category(),
      };

      expect(await controller.create(productDto)).toEqual({
        id: expect.any(Number),
        ...productDto,
      });
    });
  });
  describe('update', () => {
    it('should update a product', async () => {
      const productDto: ProductDto = {
        name: 'Jacket3',
        description: 'TestDescription',
        color: 'Black',
        size: 'S',
        price: 1000000,
        category: new Category(),
      };
      expect(await controller.update(productDto, 2)).toEqual({
        id: 2,
        ...productDto,
      });
    });
  });
  //   describe('get', () => {
  //     it('should be defined', () => {
  //       expect(controller).toBeDefined();
  //     });

  //     it('should return a product', async () => {
  //       expect(await controller.getOne(2)).toEqual(new GetBookDto(mockBooksDatabase[0]));
  //     });

  //     it('should return all books', async () => {
  //       const result = mockBooksDatabase.filter(book => {
  //         if (!book.isRemoved) {
  //           return book;
  //         }
  //       });

  //       expect(await controller.findAll()).toEqual(result.map(book => new GetBookDto(book)));
  //     });

  //     it('should throw the exception that book not found', async () => {
  //       expect(async () => await controller.findOne('3')).rejects.toThrow('BOOK NOT FOUND');
  //     });
  //   });
});
