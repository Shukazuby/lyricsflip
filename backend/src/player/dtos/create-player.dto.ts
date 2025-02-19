import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsUUID,
  Min,
  MinLength,
} from 'class-validator';
import { Exclude, Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class PlayerDTO {
  @IsUUID()
  @IsOptional()
  @Expose()
  id?: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Firstname is required' })
  @Expose()
  firstname: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'Lastname is required' })
  @Expose()
  lastname: string;


  @ApiProperty()
  @IsEmail({}, { message: 'Invalid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  @Expose()
  email: string;

  @Expose()
  createdAt?: Date; 

  @Expose()
  updatedAt?: Date;
}
