import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsOptional } from 'class-validator';
import { Attendance } from 'src/attendance/entities/attendance.entity';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsOptional()
  email?: string;
  @IsOptional()
  password?: string;
  @IsOptional()
  isActive?: boolean;
  @IsOptional()
  phone?: number;
  @IsOptional()
  address?: string;
  @IsOptional()
  birthday?: Date;
  @IsOptional()
  clothingSize?: string;
  @IsOptional()
  attendance?: Attendance[];
}
