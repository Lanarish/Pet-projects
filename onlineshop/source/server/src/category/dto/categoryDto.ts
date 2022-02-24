import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, Matches } from 'class-validator';

export class CategoryDto {
  @ApiProperty({ example: 'Jackets', description: 'Category name' })
  @IsNotEmpty()
  @Matches(RegExp(/[a-zA-Z0-9_-]/))
  name: string;
}
