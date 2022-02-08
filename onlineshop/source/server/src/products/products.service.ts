import { HttpException, HttpStatus, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';
import { SIZE } from '../constant';

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
    return this.productsRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      this.logger.warn(`Element with ${id} does not exist`);
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    return model;
  }

  async create(dto: ProductDto): Promise<Product> {
    if (!dto.name.match(RegExp(/[a-zA-Z0-9_-]/))) {
      throw new HttpException(`Empty folder!`, HttpStatus.BAD_REQUEST);
    }
    if (!SIZE.includes(dto.size.toUpperCase())) {
      this.logger.warn(`Size value is not valid`);
      throw new HttpException(`Size value is not valid. Use 'S','M','L'.`, HttpStatus.BAD_REQUEST);
    }
    this.logger.log(`A new product has been created! Product: ${dto.name}`);
    return await this.productsRepository.save(dto);
  }

  async remove(id: string): Promise<void> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      this.logger.warn(`Element with ${id} does not exist`);
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    this.logger.log(`The product has been removed! id: ${id}`);
    await this.productsRepository.delete(id);
  }

  async update(dto: ProductDto, id: number): Promise<Product> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      this.logger.warn(`Element with ${id} does not exist`);
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    const updateProduct = { ...model, ...dto };
    this.logger.log(`The product has been updated! id: ${updateProduct.productId}`);
    return this.productsRepository.save(updateProduct);
  }
}
