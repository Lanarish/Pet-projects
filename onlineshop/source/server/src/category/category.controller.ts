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

import { CategoryService } from './category.service';
import { CategoryDto } from './dto/categoryDto';

import { Category } from 'entity/category.entity';

@Controller('category')
export class CategoryController {
  private logger: Logger;
  constructor(private categoryService: CategoryService) {
    this.logger = new Logger(CategoryController.name);
  }

  @Get()
  getAll(): Promise<Category[]> {
    try {
      return this.categoryService.findAllCategories();
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  @Get(':id')
  async getOne(@Param('id') id: number) {
    try {
      return this.categoryService.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }
  @Post()
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
  async remove(@Param('id') id: number) {
    try {
      return this.categoryService.remove(id);
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
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
