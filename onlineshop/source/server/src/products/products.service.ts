import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';
import { size } from '../constant';

import { ProductDto } from './dto/productDto.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: string): Promise<Product> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    return model;
  }

  async create(dto: ProductDto): Promise<Product> {
    if (!size.includes(dto.size.toUpperCase())) {
      throw new HttpException(`Size value is not valid`, HttpStatus.BAD_REQUEST);
    }
    return await this.productsRepository.save(dto);
  }

  async remove(id: string): Promise<void> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    await this.productsRepository.delete(id);
  }

  async update(dto: ProductDto, id: string): Promise<Product> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    model.name = dto.name;
    model.description = dto.description;
    model.color = dto.color;
    model.price = dto.price;
    model.size = dto.size;
    model.categoryId = dto.categoryId;
    return this.productsRepository.save(model);
  }
}
