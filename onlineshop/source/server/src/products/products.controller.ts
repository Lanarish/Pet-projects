import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';

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
  getOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }
  @Post()
  create(@Body() createProductDto: ProductDto): Promise<Product> {
    return this.productService.create(createProductDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const model = await this.productService.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    return this.productService.remove(id);
  }

  @Put(':id')
  async update(@Body() createProductDto: ProductDto, @Param('id') id: string) {
    const model = await this.productService.findOne(id);
    if (!model) {
      throw new HttpException(`Element with ${id} does not exist`, HttpStatus.NOT_FOUND);
    }
    model.name = createProductDto.name;
    model.description = createProductDto.description;
    model.color = createProductDto.color;
    model.price = createProductDto.price;
    model.size = createProductDto.size;
    model.categoryId = createProductDto.categoryId;
    return this.productService.update(model);
  }
}
