import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { Product } from '../entity/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getAll(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  @Post()
  create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(id);
  }

  @Put(':id')
  async update(@Body() createProductDto: CreateProductDto, @Param('id') id: string) {
    const model = await this.productService.findOne(id);
    if (model) {
      model.name = createProductDto.name;
      return this.productService.update(id, model);
    }
    return;
  }
}
