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
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { Category } from '../entity/category.entity';
import { NotFoundResponse } from '../responses/notFoundResponse';
import { CreateResponse } from '../responses/createdResponse';
import { NotAcceptableResponse } from '../responses/notAcceptableResponse';
import { BadRequestResponse } from '../responses/badRequestResponse';

import { CategoryService } from './category.service';
import { CategoryDto } from './dto/categoryDto';

@ApiTags('Category')
@Controller('category')
export class CategoryController {
  private logger: Logger;
  constructor(private categoryService: CategoryService) {
    this.logger = new Logger(CategoryController.name);
  }

  @Get()
  @ApiOperation({ summary: 'Get all category' })
  @ApiResponse({ status: 200, type: [Category] })
  getAll(): Promise<Category[]> {
    try {
      return this.categoryService.findAllCategories();
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get(':id')
  @ApiOperation({ summary: 'Get one category by id' })
  @ApiResponse({ status: 200, type: Category })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found category by this id' })
  async getOne(@Param('id') id: string) {
    try {
      return this.categoryService.findOne(Number(id));
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Post()
  @ApiOperation({ summary: 'Create category' })
  @ApiResponse({ status: 200, type: Category })
  @ApiResponse({ status: 201, type: CreateResponse, description: 'Created product' })
  @ApiResponse({ status: 406, type: NotAcceptableResponse, description: 'Not valid value' })
  @ApiResponse({ status: 400, type: BadRequestResponse, description: 'Not valid value' })
  @ApiBody({ type: CategoryDto })
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() dto: CategoryDto): Promise<Category> {
    try {
      return this.categoryService.create(dto);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  @Delete(':id')
  @ApiOperation({ summary: 'Remove category' })
  @ApiResponse({ status: 200 })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found category by this id' })
  async remove(@Param('id') id: string) {
    try {
      return this.categoryService.remove(Number(id));
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update category' })
  @ApiResponse({ status: 200, type: Category })
  @ApiResponse({ status: 404, type: NotFoundResponse, description: 'Not found product by this id' })
  @ApiBody({ type: CategoryDto })
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Body() dto: CategoryDto, @Param('id') id: number): Promise<Category> {
    try {
      return this.categoryService.update(dto, id);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
}
