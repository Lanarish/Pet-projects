import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
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
    try {
      const findAllProducts = this.productsRepository.find();
      this.logger.log('The all products have been downloaded');
      return findAllProducts;
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
  }

  async findOne(id: string): Promise<Product> {
    try {
      const model = await this.productsRepository.findOne(id);

      if (!model) {
        this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
        throw new HttpException(ELEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      this.logger.log(`The product id:${id} has successfully found`);
      return model;
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error);
    }
  }

  async create(dto: ProductDto): Promise<Product> {
    try {
      this.logger.log(`Start creating product... `);
      if (!SIZE.includes(dto.size.toUpperCase())) {
        this.logger.error(`Size value is not valid`);
        throw new HttpException(`Size value is not valid. Use 'S','M','L'.`, HttpStatus.BAD_REQUEST);
      }
      this.logger.log(`A new product has been created! Product: ${dto.name}`);
      return await this.productsRepository.save(dto);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      this.logger.log(`Start removal process... `);
      const model = await this.productsRepository.findOne(id);
      if (!model) {
        this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
        throw new HttpException(ELEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      this.logger.log(`The product has been removed! id: ${id}`);
      await this.productsRepository.delete(id);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
  }

  async update(dto: ProductDto, id: number): Promise<Product> {
    try {
      this.logger.log(`Start update process... `);
      const model = await this.productsRepository.findOne(id);
      if (!model) {
        this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
        throw new HttpException(ELEMENT_NOT_FOUND, HttpStatus.NOT_FOUND);
      }
      this.logger.log(`Update product id:${id}... `);
      const updateProduct = { ...model, ...dto };
      this.logger.log(`The product has been updated! id: ${updateProduct.productId}`);
      return this.productsRepository.save(updateProduct);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error);
    }
  }
}
