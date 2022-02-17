import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Product } from './product.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  categoryId: number;

  @Column()
  name: string;

  @OneToMany(() => Product, products => products.category)
  products: Product[];

  constructor(categoryId: number) {
    this.categoryId = categoryId;
  }
}
