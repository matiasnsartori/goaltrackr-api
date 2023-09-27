import { PartialType } from '@nestjs/mapped-types';
import { CreateAttendanceDto } from './create-attendance.dto';
import { IsDate, IsNumber } from 'class-validator';

export class UpdateAttendanceDto extends PartialType(CreateAttendanceDto) {
  @IsDate()
  date: Date;
  @IsNumber()
  userId: number;
}
