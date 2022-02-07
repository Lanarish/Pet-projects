import { Body, Controller, Delete, Get, Logger, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';

import { Product } from '../entity/product.entity';

import { ProductDto } from './dto/productDto.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  private readonly logger = new Logger(ProductsController.name);
  constructor(private productService: ProductsService) {}

  @Get()
  getAll(): Promise<Product[]> {
    try {
      this.logger.log('The all products have been downloaded');
      return this.productService.findAll();
    } catch (error) {
      this.logger.error(error.message);
      return error.message;
    }
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    try {
      this.logger.log(`The product id:${id} has successfully found`);
      return this.productService.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      return error.message;
    }
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() productDto: ProductDto): Promise<Product> {
    try {
      this.logger.log(`Start creating product... `);
      return this.productService.create(productDto);
    } catch (error) {
      this.logger.error(error.message);
      return error.message;
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try {
      this.logger.log(`Start removal process... `);
      return this.productService.remove(id);
    } catch (error) {
      this.logger.error(error.message);
      return error.message;
    }
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() productDto: ProductDto, @Param('id') id: string): Promise<Product> {
    try {
      this.logger.log(`Update product id:${id} `);
      return this.productService.update(productDto, Number(id));
    } catch (error) {
      this.logger.error(error.message);
      return error.message;
    }
  }
}
