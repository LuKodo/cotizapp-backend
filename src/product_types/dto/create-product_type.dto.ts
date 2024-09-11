import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateProductTypeDto {
  @ApiProperty()
  @IsString()
  name: string;
}
