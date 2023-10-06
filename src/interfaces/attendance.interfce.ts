import { UsersEntity } from 'src/users/entities/user.entity';
import { IBussinessUnit } from './bussiness_unit.interface';
import { IGroup } from './group.interface';

export interface IAttendance {
  date: Date;
  user: UsersEntity;
  // group: IGroup;
  // bussinessUnit: IBussinessUnit;
}
