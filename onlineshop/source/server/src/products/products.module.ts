import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Product } from '../entity/product.entity';

import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

import { CategoryService } from 'category/category.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  providers: [ProductsService, CategoryService],
  controllers: [ProductsController],
  exports: [ProductsService],
})
export class ProductsModule {}
