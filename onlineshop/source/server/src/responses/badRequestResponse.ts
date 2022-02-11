import { ApiProperty } from '@nestjs/swagger';

export class BadRequestResponse {
  @ApiProperty({ default: 400 })
  statusCode: number;
  @ApiProperty({ default: 'Name should not be empty' })
  message: string;
  @ApiProperty({ default: 'Bad Request' })
  error: string;
}
