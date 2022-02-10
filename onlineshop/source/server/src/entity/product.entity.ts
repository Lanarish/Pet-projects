import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Product {
  @ApiProperty({ example: '1', description: 'Unique identificator of product' })
  @PrimaryGeneratedColumn()
  productId: string;

  @ApiProperty({ example: 'Leather jacket', description: 'Product name' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Some text', description: 'Description of product' })
  @Column()
  description: string;

  @ApiProperty({ example: 'S', description: 'Size of product' })
  @Column()
  size: string;

  @ApiProperty({ example: 'Black', description: 'Color of product' })
  @Column()
  color: string;

  @ApiProperty({ example: '10000', description: 'Price of product' })
  @Column()
  price: number;

  @ApiProperty({ example: '1', description: 'Unique identificator of category' })
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
