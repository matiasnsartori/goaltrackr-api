import { BussinessUnit } from 'src/bussiness-unit/entities/bussiness-unit.entity';
import { Attendance } from '../../attendance/entities/attendance.entity';
import { BaseEntity } from '../../config/base.entity';
import { IUser } from '../../interfaces/user.interface';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Group } from 'src/group/entities/group.entity';
@Entity({ name: 'users' })
export class UsersEntity extends BaseEntity implements IUser {
  @Column({ unique: true })
  email: string;
  @Column({ unique: true })
  username: string;
  @Column()
  password: string;
  @Column()
  name: string;
  @Column()
  lastName: string;
  @Column({ default: true })
  isActive: boolean;
  @Column()
  role: string;
  @Column()
  dni: number;
  @Column()
  phone: number;
  @Column()
  address: string;
  @Column()
  birthday: Date;
  @Column()
  clothingSize: string;
  @Column()
  experience: boolean;
  @Column()
  position: string;
  @ManyToOne(() => Group, (group) => group.user)
  @JoinColumn({ name: 'group_id' })
  group: Group;
  @ManyToOne(() => BussinessUnit, (bussinessUnit) => bussinessUnit.user)
  @JoinColumn({ name: 'bussinessUnit_id' })
  bussinessUnit: BussinessUnit;
  // Esta es una relación de uno a muchos, un usuario puede tener muchas asistencias, bidireccionalmente se puede acceder a la asistencia desde el usuario y viceversa.
  @OneToMany(() => Attendance, (attendance) => attendance.user)
  attendance: Attendance[];
}
