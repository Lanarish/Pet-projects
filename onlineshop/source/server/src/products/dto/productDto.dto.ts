import { IsNotEmpty, IsPositive, IsUppercase, MaxLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  @MaxLength(20, {
    message: 'Title is too long',
  })
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
  categoryId: number;
}
