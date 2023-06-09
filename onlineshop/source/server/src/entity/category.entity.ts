import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Product } from '../entity/product.entity';

@Entity()
export class Category {
  @ApiProperty({ example: '1', description: 'Unique identificator of category' })
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  @ApiProperty({ example: 'Jacket', description: 'Category name' })
  name: string;

  @OneToMany(() => Product, products => products.category)
  products: Product[];
}
