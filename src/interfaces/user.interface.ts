import { Attendance } from 'src/attendance/entities/attendance.entity';
import { BussinessUnit } from 'src/bussiness-unit/entities/bussiness-unit.entity';
import { Group } from 'src/group/entities/group.entity';

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
  group: Group;
  bussinessUnit: BussinessUnit;
  attendance?: Attendance[];
}
