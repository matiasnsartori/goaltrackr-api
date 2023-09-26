import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { ROLES } from 'src/constants/roles';
export class CreateUserDto {
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
  @IsString()
  experience?: boolean;
  @IsString()
  position?: string;
  @IsNotEmpty()
  @IsString()
  group: string;
  @IsNotEmpty()
  @IsString()
  bussinessUnit: string;
}
