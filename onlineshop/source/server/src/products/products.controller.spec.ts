import { Test, TestingModule } from '@nestjs/testing';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  const mockProductService = {
    create: jest.fn(dto => ({
      id: Date.now(),
      ...dto,
    })),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [ProductsService],
    })
      .overrideProvider(ProductsService)
      .useValue(mockProductService)
      .compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should create a product', () => {
    const dto = {
      name: 'Leather jacket',
      description: 'Some text',
      size: 'S',
      color: 'Black',
      price: 10000,
      category: 1,
    };
    expect(controller.create(dto)).toEqual({
      productId: expect.any(Number),
      name: dto.name,
      description: dto.description,
      size: dto.size,
      color: dto.color,
      price: dto.price,
      category: dto.category,
    });
    expect(mockProductService.create).toHaveBeenCalledWith(dto);
  });
});
// import { Test } from '@nestjs/testing';
// import { async } from 'rxjs';

// import { ProductsController } from '../products/products.controller';
// import { ProductsService } from '../products/products.service';

// describe('ProductsController', () => {
//   let productsController: ProductsController;
//   let productsService: ProductsService;

//   beforeEach(async () => {
//     const moduleRef = await Test.createTestingModule({
//       controllers: [ProductsController],
//       providers: [ProductsService],
//     }).compile();

//     productsService = moduleRef.get<ProductsService>(ProductsService);
//     productsController = moduleRef.get<ProductsController>(ProductsController);
//   });
//   it('should be defined', () => {
//     expect(productsController).toBeDefined();
//   });
//   describe('findAll', () => {
//     it('should return an array of products', async () => {
//       const result = [
//         {
//           productId: 1,
//           name: 'Jacket',
//           description: 'Some text',
//           size: 'S',
//           color: 'Black',
//           price: 10000,
//           category: {
//             categoryId: 1,
//             name: 'Jackets',
//           },
//         },
//       ];
//       console.log(productsController.getAll());
//       jest.spyOn(productsService, 'findAll').mockImplementation(async () => result);

//       expect(await productsController.getAll()).toBe(result);
//     });
//   });
// });
