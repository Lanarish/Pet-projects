import { ApiProperty } from '@nestjs/swagger';

export class NotAcceptableResponse {
  @ApiProperty({ default: 406 })
  statusCode: number;
  @ApiProperty({ default: 'Value is not valid' })
  message: string;
  @ApiProperty({ default: 'Not Acceptable' })
  error: string;
}
