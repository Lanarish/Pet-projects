import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { Product } from '../entity/product.entity';

import { ProductDto } from './dto/productDto.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    try {
      return this.productService.findAll();
    } catch (error) {
      throw error.message;
    }
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    try {
      return this.productService.findOne(id);
    } catch (error) {
      throw error.message;
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() productDto: ProductDto): Promise<Product> {
    try {
      return this.productService.create(productDto);
    } catch (error) {
      throw error.message;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Product> {
    try {
      return this.productService.remove(id);
    } catch (error) {
      throw error.message;
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() productDto: ProductDto, @Param('id') id: string): Promise<Product> {
    try {
      return this.productService.update(productDto, id);
    } catch (error) {
      throw error.message;
    }
  }
}
