import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ROLES } from 'src/constants/roles';
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
  @IsNotEmpty()
  isActive: boolean;
  @IsNotEmpty()
  @IsEnum(ROLES)
  role: ROLES;
  @IsNotEmpty()
  dni: number;
  phone?: number;
  address?: string;
  @IsNotEmpty()
  @IsDateString()
  birthday: Date;
  @IsString()
  clothingSize?: string;
  @IsNotEmpty()
  @IsString()
  group: string;
  @IsNotEmpty()
  @IsString()
  bussinessUnit: string;
}
