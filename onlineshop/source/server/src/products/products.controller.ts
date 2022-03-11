import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
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
import { NotFoundResponse } from '../responses/notFoundResponse';
import { NotAcceptableResponse } from '../responses/notAcceptableResponse';
import { BadRequestResponse } from '../responses/badRequestResponse';
import { CreateResponse } from '../responses/createdResponse';

import { ProductsService } from './products.service';
import { ProductDto } from './dto/productDto.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  private logger: Logger;
  constructor(private productService: ProductsService) {
    this.logger = new Logger(ProductsController.name);
  }

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  @ApiResponse({ status: 200, type: [Product] })
  @Header('X-Total-Count', '11')
  @Header('Access-Control-Expose-Headers', '11')
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
  @Header('x-total-count', '11')
  async getOne(@Param('id') id: number) {
    try {
      return this.productService.findOne(Number(id));
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Get('productsByCategory/:categoryId')
  @Header('x-total-count', '11')
  @ApiOperation({ summary: 'Get products by category' })
  @ApiResponse({ status: 200, type: Product })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  async findAllByCategory(@Param('categoryId') categoryId: string) {
    try {
      return this.productService.getAllByCategory(Number(categoryId));
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Post()
  @Header('x-total-count', '11')
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
  @Header('x-total-count', '11')
  @ApiOperation({ summary: 'Remove product' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  async remove(@Param('id') id: number) {
    try {
      return this.productService.remove(Number(id));
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @Header('x-total-count', '11')
  @ApiOperation({ summary: 'Update product' })
  @ApiResponse({ status: 200, type: Product })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  @ApiBody({ type: ProductDto })
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() productDto: ProductDto, @Param('id') id: number): Promise<Product> {
    try {
      return this.productService.update(productDto, id);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
