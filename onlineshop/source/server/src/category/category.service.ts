import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Category } from '../entity/category.entity';
import { ELEMENT_NOT_FOUND, FAILED_DELETE } from '../constant';

import { CategoryDto } from './dto/categoryDto';

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

  async findAllCategories(): Promise<Category[]> {
    let findAllCategories;
    try {
      findAllCategories = await this.categoryRepository.find();
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
    if (findAllCategories.length > 0) {
      this.logger.log(`The all ${findAllCategories.length} categories have been downloaded `);
    } else {
      this.logger.log('Empty list');
    }
    return findAllCategories;
  }

  async findOne(id: number): Promise<Category> {
    let model;
    try {
      model = await this.categoryRepository.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw new Error(error);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw new NotFoundException(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`The category id:${id} has successfully found`);
    return model;
  }
  async remove(id: number): Promise<void> {
    let model;
    this.logger.log(`Start removal process... `);
    try {
      model = await this.categoryRepository.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw Error(ELEMENT_NOT_FOUND);
    }
    try {
      await this.categoryRepository.delete(id);
      this.logger.log(`The category has been removed! id: ${id}`);
    } catch (error) {
      this.logger.error(FAILED_DELETE);
      throw new Error(FAILED_DELETE);
    }
  }

  async update(dto: CategoryDto, id: number): Promise<Category> {
    let model;
    this.logger.log(`Start update process... `);
    try {
      model = await this.categoryRepository.findOne(id);
    } catch (error) {
      this.logger.error(error.message);
      throw Error(error.message);
    }
    if (!model) {
      this.logger.error(`id:${id}`, ELEMENT_NOT_FOUND);
      throw Error(ELEMENT_NOT_FOUND);
    }
    this.logger.log(`Update category ${model.name}... `);
    const updateCategory = { ...model, ...dto };
    const updatedCategory = this.categoryRepository.save(updateCategory);
    this.logger.log(`The Category has been updated! id: ${updateCategory.categoryId}`);
    return updatedCategory;
  }
}
