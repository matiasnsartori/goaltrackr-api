import { IsDate, IsNumber } from 'class-validator';

export class CreateAttendanceDto {
  @IsDate()
  date: Date;
  @IsNumber()
  userId: number;
}
