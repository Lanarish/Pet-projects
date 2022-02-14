import { IsNotEmpty, IsPositive, IsUppercase, Matches, MaxLength } from 'class-validator';

import { Category } from 'entity/category.entity';

export class ProductDto {
  @IsNotEmpty()
  @MaxLength(20, {
    message: 'Title is too long',
  })
  @Matches(RegExp(/[a-zA-Z0-9_-]/))
  name: string;
  @IsNotEmpty()
  @MaxLength(200, {
    message: 'Description is too long',
  })
  description: string;
  @IsNotEmpty()
  @IsUppercase()
  size: string;
  @IsNotEmpty()
  color: string;
  @IsNotEmpty()
  @IsPositive()
  price: number;
  @IsNotEmpty()
  categoryId: Category;
}
