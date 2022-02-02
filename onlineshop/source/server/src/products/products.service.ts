import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';

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

  async findOne(id: string): Promise<Product | undefined> {
    return this.productsRepository.findOne(id);
  }

  async create(dto: ProductDto): Promise<Product> {
    const product = await this.productsRepository.save(dto);
    return product;
  }
  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async update(dto: Product): Promise<Product> {
    return this.productsRepository.save(dto);
  }
}
