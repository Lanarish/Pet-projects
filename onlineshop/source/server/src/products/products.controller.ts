import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { Product } from '../entity/product.entity';

import { ProductDto } from './dto/productDto.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private logger: Logger;
  constructor(private productService: ProductsService) {
    this.logger = new Logger(ProductsController.name);
  }

  @Get()
  getAll(): Promise<Product[]> {
    this.logger.log('The all products have been downloaded');
    return this.productService.findAll();
  }
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    this.logger.log(`The product id:${id} has successfully found`);
    return this.productService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() productDto: ProductDto): Promise<Product> {
    this.logger.log(`Start creating product... `);
    return this.productService.create(productDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.logger.log(`Start removal process... `);
    return this.productService.remove(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() productDto: ProductDto, @Param('id') id: string): Promise<Product> {
    this.logger.log(`Update product id:${id} `);
    return this.productService.update(productDto, Number(id));
  }
}
