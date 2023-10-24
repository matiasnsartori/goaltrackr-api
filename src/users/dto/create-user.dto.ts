import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Attendance } from 'src/attendance/entities/attendance.entity';
import { BussinessUnit } from 'src/bussiness-unit/entities/bussiness-unit.entity';
import { BUSSINESS_UNITS, GROUPS, ROLES } from 'src/constants';
import { Group } from 'src/group/entities/group.entity';
import { IUser } from 'src/interfaces';
export class CreateUserDto implements IUser {
  @IsString()
  username: string;
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  firstName: string;
  @IsNotEmpty()
  @IsNotEmpty()
  @IsString()
  lastName: string;
  isActive: boolean;
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;
  @IsNotEmpty()
  dni: number;
  @IsNotEmpty()
  phone: number;
  @IsOptional()
  address?: string;
  @IsNotEmpty()
  birthday: Date;
  @IsString()
  clothingSize?: string;
  @IsNotEmpty()
  @IsUUID()
  group: Group;
  @IsNotEmpty()
  @IsUUID()
  bussinessUnit: BussinessUnit;
}
