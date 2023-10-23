import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { BussinessUnit } from 'src/bussiness-unit/entities/bussiness-unit.entity';
import { BUSSINESS_UNITS, ROLES } from 'src/constants';
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
  @IsString()
  lastName: string;
  isActive: boolean;
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;
  @IsNotEmpty()
  dni: number;
  phone?: number;
  address?: string;
  @IsNotEmpty()
  birthday: Date;
  @IsString()
  clothingSize?: string;
  @IsNotEmpty()
  @IsString()
  group: Group;
  @IsNotEmpty()
  @IsEnum(BUSSINESS_UNITS)
  bussinessUnit: BussinessUnit;
}
