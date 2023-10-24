import { IsDate, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';
import { UsersEntity } from 'src/users/entities/user.entity';

export class CreateAttendanceDto {
  @IsDate()
  @IsNotEmpty()
  date: Date;
  @IsUUID()
  @IsNotEmpty()
  user: UsersEntity;
}
