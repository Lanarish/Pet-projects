import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryDto } from './dto/categoryDto';

import { Category } from 'entity/category.entity';

@Injectable()
export class CategoryService {
  private logger: Logger;
  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {
    this.logger = new Logger(CategoryService.name);
  }

  async create(dto: CategoryDto): Promise<Category> {
    this.logger.log(`Start creating category... `);
    try {
      const createNewCategory = await this.categoryRepository.save(dto);
      this.logger.log(`A new category has been created! Product: ${dto.name}`);
      return createNewCategory;
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
  }

  async findAll(): Promise<Category[]> {
    let findAllCategories;
    try {
      findAllCategories = await this.categoryRepository.find();
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
    if (findAllCategories.length > 0) {
      this.logger.log('The all categories have been downloaded');
    } else {
      this.logger.log('Empty file');
    }
    return findAllCategories;
  }
}
