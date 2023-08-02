export class CreateUserDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isActive: boolean;
  isAdmin: boolean;
  isSuperUser: boolean;
  isStaff: boolean;
  dni: number;
  phone: number;
  address: string;
  birthday: Date;
  clothingSize: string;
  experience: boolean;
  position: string;
  group: string;
  bussinessUnit: string;
}
