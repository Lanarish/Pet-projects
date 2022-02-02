import { IsNotEmpty, IsPositive, IsUppercase, Length, MaxLength, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
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
