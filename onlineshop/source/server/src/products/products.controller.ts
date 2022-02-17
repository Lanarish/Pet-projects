import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

import { Product } from '../entity/product.entity';

import { ProductDto } from './dto/productDto.dto';
import { ProductsService } from './products.service';

import { NotFoundResponse } from 'responses/notFoundResponse';
import { NotAcceptableResponse } from 'responses/notAcceptableResponse';
import { BadRequestResponse } from 'responses/badRequestResponse';
import { CreateResponse } from 'responses/createdResponse';
import { CategoryService } from 'category/category.service';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  private logger: Logger;
  constructor(private productService: ProductsService, private categoryService: CategoryService) {
    this.logger = new Logger(ProductsController.name);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [Product] })
  getAll(): Promise<Product[]> {
    try {
      return this.productService.findAll();
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one product by id' })
  @ApiResponse({ status: 200, type: Product })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  async getOne(@Param('id') id: string) {
    try {
      return this.productService.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('productsByCategory/:categoryId')
  @ApiOperation({ summary: 'Get products by category' })
  @ApiResponse({ status: 200, type: Product })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  @ApiBody({ type: ProductDto })
  async findAllByCategory(@Param('categoryId') categoryId: string) {
    try {
      const category = await this.categoryService.findOne(categoryId);
      return this.productService.getAllByCategory(category);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Post()
  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 200, type: Product })
  @ApiResponse({ status: 201, type: CreateResponse, description: 'Created product' })
  @ApiResponse({ status: 406, type: NotAcceptableResponse, description: 'Not valid value' })
  @ApiResponse({ status: 400, type: BadRequestResponse, description: 'Not valid value' })
  @ApiBody({ type: ProductDto })
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() productDto: ProductDto): Promise<Product> {
    try {
      return this.productService.create(productDto);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove product' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  async remove(@Param('id') id: string) {
    try {
      return this.productService.remove(id);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, type: Product })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  @ApiBody({ type: ProductDto })
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() productDto: ProductDto, @Param('id') id: string): Promise<Product> {
    try {
      return this.productService.update(productDto, Number(id));
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
