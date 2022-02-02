import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';

import { CreateProductDto } from './dto/create-product.dto';

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

  async create(dto: CreateProductDto): Promise<Product> {
    const product = await this.productsRepository.save(dto);
    return product;
  }
  async remove(id: string): Promise<void> {
    await this.productsRepository.delete(id);
  }

  async update(id: string, dto: Product): Promise<Product> {
    return this.productsRepository.save(dto);
  }
}
