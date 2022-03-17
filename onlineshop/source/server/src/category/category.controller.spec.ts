import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';

import { Product } from '../entity/product.entity';
import { Category } from '../entity/category.entity';
import { mockCategoryRepository, mockList } from '../__mocks__/mockCategoryReposity.mock';
import { mockProductList } from '../__mocks__/mockProductRepository.mock';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto/categoryDto';

describe('CategoryController', () => {
  let controller: CategoryController;
  let mockProduct: Product;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryController],
      providers: [CategoryService, { provide: getRepositoryToken(Category), useValue: mockCategoryRepository }],
    }).compile();
    controller = module.get<CategoryController>(CategoryController);
    mockProduct = mockProductList[0];
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('create', () => {
    let categoryDto: CategoryDto;
    beforeEach(async () => {
      categoryDto = {
        name: 'Jackets',
      };
    });
    it('should create a category', async () => {
      expect(await controller.create(categoryDto)).toEqual({
        id: 3,
        name: 'Jackets',
        products: [],
      });
    });
  });
  describe('update', () => {
    let categoryDto: CategoryDto;

    beforeEach(async () => {
      categoryDto = {
        name: 'Jacket',
      };
    });
    it('should update a category', async () => {
      expect(await controller.update(categoryDto, '1')).toEqual({
        id: mockList[0].id,
        ...categoryDto,
        products: [mockProduct],
      });
    });
    it('should throw the exception that category not found', async () => {
      expect(async () => await controller.getOne('7')).rejects.toThrow('Element does not exist');
    });
  });

  describe('get', () => {
    let category: Category;

    beforeEach(async () => {
      category = {
        id: '1',
        name: 'Jacket',
        products: [mockProduct],
      };
    });

    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should return a category', async () => {
      expect(await controller.getOne('1')).toEqual(category);
    });

    it('should return all categories', async () => {
      const categories = await controller.getAll();
      expect(categories.length).toEqual(3);
    });

    it('should throw the exception that category not found', async () => {
      expect(async () => await controller.getOne('3')).rejects.toThrow('Element does not exist');
    });
  });
  describe('delete', () => {
    it('should return not found exception after we delete our category', async () => {
      await controller.remove('1');
      expect(async () => await controller.getOne('1')).rejects.toThrow('FAILED_DELETE');
    });
  });
});
