import { Injectable, Logger, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';
import { SIZE, ELEMENT_NOT_FOUND, FAILED_DELETE, FAILED_UPDATED, INVALID_SIZE } from '../constant';

import { ProductDto } from './dto/productDto.dto';

@Injectable()
export class ProductsService {
  private logger: Logger;
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {
    this.logger = new Logger(ProductsService.name);
  }

  async findAll(): Promise<Product[]> {
    let findAllProducts;
    try {
      findAllProducts = await this.productsRepository.find({ relations: ['category'] });
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
    if (findAllProducts.length > 0) {
      this.logger.log('The all products have been downloaded');
    } else {
      this.logger.log('Empty list');
    }
    return findAllProducts;
  }

  async findOne(id: string): Promise<Product> {
    let model;
    try {
      model = await this.productsRepository.findOne(id, { relations: ['category'] });
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw new NotFoundException(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`The product id:${id} has successfully found`);
    return model;
  }

  async getAllByCategory(categoryId: string): Promise<Product[]> {
    this.logger.log(`Start getting products... `);
    let findByCategory: Product[];
    try {
      findByCategory = await this.productsRepository.find({
        where: { category: categoryId },
        relations: ['category'],
      });
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }

    if (!findByCategory?.length) {
      this.logger.error(`id:${categoryId}`, ELEMENT_NOT_FOUND);
      throw new NotFoundException(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`The all products have been downloaded by category ${categoryId}`);
    return findByCategory;
  }

  async create(dto: ProductDto): Promise<Product> {
    this.logger.log(`Start creating product... `);
    if (!SIZE.includes(dto.size.toUpperCase())) {
      this.logger.error(INVALID_SIZE);
      throw new NotAcceptableException(INVALID_SIZE);
    }
    try {
      const createNewProduct = await this.productsRepository.save(dto);
      this.logger.log(`A new product has been created! Product: ${dto.name}`);
      return createNewProduct;
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    let model;
    this.logger.log(`Start removal process... `);
    try {
      model = await this.productsRepository.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw new NotFoundException(ELEMENT_NOT_FOUND);
    }
    try {
      await this.productsRepository.delete(id);
      this.logger.log(`The product has been removed! id: ${id}`);
    } catch (error) {
      this.logger.error(FAILED_DELETE);
      throw new Error(FAILED_DELETE);
    }
  }

  async update(dto: ProductDto, id: number): Promise<Product> {
    let model;
    this.logger.log(`Start update process... `);
    try {
      model = await this.productsRepository.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw new NotFoundException(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`Update product id:${id}... `);
    const updateProduct = { ...model, ...dto };
    try {
      const updatedProduct = this.productsRepository.save(updateProduct);
      this.logger.log(`The product has been updated! id: ${updateProduct.productId}`);
      return updatedProduct;
    } catch (error) {
      this.logger.error(FAILED_UPDATED);
      throw new Error(FAILED_UPDATED);
    }
  }
}
