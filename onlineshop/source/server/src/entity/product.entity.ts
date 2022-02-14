import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Category } from './category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  productId: string;

  @Column()
  name: string;
  @Column()
  description: string;

  @Column()
  size: string;

  @Column()
  color: string;

  @Column()
  price: number;

  @ManyToOne(() => Category, category => category.products)
  categoryId: Category;

  constructor(
    productId: string,
    name: string,
    description: string,
    size: string,
    color: string,
    price: number,
    categoryId: Category,
  ) {
    this.productId = productId;
    this.name = name;
    this.description = description;
    this.size = size;
    this.color = color;
    this.price = price;
    this.categoryId = categoryId;
  }
}
