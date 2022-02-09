import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';
import { SIZE, ELEMENT_NOT_FOUND } from '../constant';

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
      findAllProducts = this.productsRepository.find();
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
    this.logger.log('The all products have been downloaded');
    return findAllProducts;
  }

  async findOne(id: string): Promise<Product> {
    let model;
    try {
      model = await this.productsRepository.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw Error(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`The product id:${id} has successfully found`);
    return model;
  }

  async create(dto: ProductDto): Promise<Product> {
    this.logger.log(`Start creating product... `);
    if (!SIZE.includes(dto.size.toUpperCase())) {
      this.logger.error(`Size value is not valid`);
      throw Error(`Size value is not valid. Use 'S','M','L'.`);
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
      throw Error(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`The product has been removed! id: ${id}`);
    await this.productsRepository.delete(id);
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
      throw Error(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`Update product id:${id}... `);
    const updateProduct = { ...model, ...dto };
    this.logger.log(`The product has been updated! id: ${updateProduct.productId}`);
    return this.productsRepository.save(updateProduct);
  }
}
