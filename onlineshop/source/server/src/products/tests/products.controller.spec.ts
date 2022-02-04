import { Test, TestingModule } from '@nestjs/testing';

import { ProductsController } from '../products.controller';
import { ProductsService } from '../products.service';

import { productStub } from './stubs/product.stub';

import { Product } from 'entity/product.entity';
import { ProductDto } from 'products/dto/productDto.dto';

jest.mock('../products.service');

describe('ProductsController', () => {
  let controller: ProductsController;
  let service: ProductsService;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    }).compile();

    controller = moduleRef.get<ProductsController>(ProductsController);
    service = moduleRef.get<ProductsService>(ProductsService);
    jest.clearAllMocks();
  });
  describe('getOne', () => {
    describe('when getOne is called', () => {
      let product: Product;

      beforeEach(async () => {
        product = await controller.getOne(productStub().productId);
      });

      it('then it should call productsService', () => {
        expect(service.findOne).toBeCalledWith(productStub().productId);
      });

      it('then is should return a product', () => {
        expect(product).toEqual(productStub());
      });
    });
  });

  describe('getAll', () => {
    describe('when getAll is called', () => {
      let products: Product[];

      beforeEach(async () => {
        products = await controller.getAll();
      });

      it('then it should call productsService', () => {
        expect(service.findAll).toHaveBeenCalled();
      });

      it('then is should return a product', () => {
        expect(products).toEqual([productStub()]);
      });
    });
  });

  describe('create', () => {
    describe('when create is called', () => {
      let product: Product;
      let productDto: ProductDto;

      beforeEach(async () => {
        productDto = {
          name: productStub().name,
          description: productStub().description,
          size: productStub().size,
          color: productStub().color,
          price: productStub().price,
          categoryId: productStub().categoryId,
        };
        product = await controller.create(productDto);
      });

      it('then it should call productService', () => {
        expect(service.create).toHaveBeenCalledWith(productDto);
      });

      it('then it should return a product', () => {
        expect(product).toEqual(productStub());
      });
    });
  });
  describe('update', () => {
    describe('when update is called', () => {
      let product: Product;
      let productDto: ProductDto;

      beforeEach(async () => {
        productDto = {
          name: 'leather',
          description: 'some',
          size: 'M',
          color: 'white',
          price: 5000,
          categoryId: 1,
        };
        product = await controller.update(productDto, productStub().productId);
      });

      it('then it should call productService', () => {
        expect(service.update).toHaveBeenCalledWith(productDto, productStub().productId);
      });

      it('then it should return a product', () => {
        expect(product).toEqual(productStub());
      });
    });
  });

  describe('remove', () => {
    describe('when remove is called', () => {
      let product: Product;

      beforeEach(async () => {
        product = await controller.remove(productStub().productId);
      });

      it('then it should call productsService', () => {
        expect(service.remove).toHaveBeenCalled();
      });
    });
  });
});
