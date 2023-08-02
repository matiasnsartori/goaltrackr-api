import { IUser } from './user.interface';

export interface IAttendance {
  id: number;
  date: Date;
  userId: number;
  user: IUser;
  createdAt: Date;
  updatedAt: Date;
}
