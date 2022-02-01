import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

// eslint-disable-next-line no-restricted-imports
import { Product } from '../entity/product.entity';

import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
  update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
    return this.productService.update(id, updateProductDto);
  }
}
