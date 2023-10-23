import { BussinessUnit } from '../../bussiness-unit/entities/bussiness-unit.entity';
import { BaseEntity } from '../../config/base.entity';
import { IGroup } from '../../interfaces';
import { UsersEntity } from '../../users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'group' })
export class Group extends BaseEntity implements IGroup {
  @Column()
  name: string;
  @OneToMany(() => UsersEntity, (user) => user.group)
  user: UsersEntity[];
  @ManyToOne(() => BussinessUnit, (bussinessUnit) => bussinessUnit.group)
  bussinessUnit: BussinessUnit;
}
