import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
  categoryId: number;
  constructor(
    productId: string,
    name: string,
    description: string,
    size: string,
    color: string,
    price: number,
    categoryId: number,
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
