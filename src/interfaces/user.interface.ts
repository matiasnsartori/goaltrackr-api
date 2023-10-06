import { Attendance } from 'src/attendance/entities/attendance.entity';

export interface IUser {
  email: string;
  username: string;
  password: string;
  name: string;
  lastName: string;
  isActive: boolean;
  role: string;
  dni: number;
  phone?: number;
  address?: string;
  birthday: Date;
  clothingSize?: string;
  group: string;
  bussinessUnit: string;
  attendance?: Attendance[];
}
