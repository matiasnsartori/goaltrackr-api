import { BaseEntity } from '../../../src/config/base.entity';
import { IAttendance } from '../../../src/interfaces';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'attendance' })
export class Attendance extends BaseEntity implements IAttendance {
  @Column()
  date: Date;
  @Column()
  userId: number;
}
