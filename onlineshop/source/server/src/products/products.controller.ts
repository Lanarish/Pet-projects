import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { Product } from '../entity/product.entity';

import { ProductDto } from './dto/productDto.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.create(productDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() productDto: ProductDto, @Param('id') id: string): Promise<Product> {
    return this.productService.update(productDto, id);
  }
}
