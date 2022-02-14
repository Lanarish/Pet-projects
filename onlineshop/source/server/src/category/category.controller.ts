import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Logger,
  Post,
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
      return this.categoryService.findAll();
    } catch (error) {
      this.logger.error(error.message);
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
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
}
