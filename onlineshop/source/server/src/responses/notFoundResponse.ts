import { ApiProperty } from '@nestjs/swagger';

export class NotFoundResponse {
  @ApiProperty({ default: 404 })
  statusCode: number;
  @ApiProperty({ default: 'Element does not exist' })
  message: string;
  @ApiProperty({ default: 'Not Found' })
  error: string;
}
