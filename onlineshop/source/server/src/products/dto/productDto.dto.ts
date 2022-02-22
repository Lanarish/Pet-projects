import { IsNotEmpty, IsPositive, IsUppercase, Matches, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

import { Category } from '../../entity/category.entity';

export class ProductDto {
  @ApiProperty({ example: 'Leather jacket', description: 'Product name' })
  @IsNotEmpty()
  @MaxLength(20, {
    message: 'Title is too long',
  })
  @Matches(RegExp(/[a-zA-Z0-9_-]/))
  name: string;

  @ApiProperty({ example: 'Some text', description: 'Description of product' })
  @IsNotEmpty()
  @MaxLength(200, {
    message: 'Description is too long',
  })
  description: string;

  @ApiProperty({ example: 'S', description: 'Size of product' })
  @IsNotEmpty()
  @IsUppercase()
  size: string;

  @ApiProperty({ example: 'Black', description: 'Color of product' })
  @IsNotEmpty()
  color: string;

  @ApiProperty({ example: '10000', description: 'Price of product' })
  @IsNotEmpty()
  @IsPositive()
  price: number;

  @ApiProperty({ example: '1', description: 'Unique identificator of category' })
  @IsNotEmpty()
  category: Category;
}
