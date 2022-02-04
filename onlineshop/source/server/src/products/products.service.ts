import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Product } from '../entity/product.entity';
import { SIZE } from '../constant';

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
    if (!SIZE.includes(dto.size.toUpperCase())) {
      throw new HttpException(`Size value is not valid`, HttpStatus.BAD_REQUEST);
    }
    return await this.productsRepository.save(dto);
  }

  async remove(id: string): Promise<Product> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    return await this.productsRepository.remove(model);
  }

  async update(dto: ProductDto, id: string): Promise<Product> {
    const model = await this.productsRepository.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    function rewriteProduct() {
      for (const key in model) {
        if (key in dto) {
          (model as any)[key] = (dto as any)[key];
        }
      }
    }
    rewriteProduct();

    return this.productsRepository.save(model);
  }
}
