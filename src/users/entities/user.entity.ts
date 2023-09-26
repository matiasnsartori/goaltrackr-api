import { BaseEntity } from '../../../src/config/base.entity';
import { IUser } from '../../../src/interfaces/user.interface';
import { Column, Entity } from 'typeorm';
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
  @Column()
  group: string;
  @Column()
  bussinessUnit: string;
}