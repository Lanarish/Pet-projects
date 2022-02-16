import { ApiProperty } from '@nestjs/swagger';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CreateResponse {
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
}
