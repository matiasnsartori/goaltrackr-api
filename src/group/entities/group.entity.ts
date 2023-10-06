import { BussinessUnit } from 'src/bussiness-unit/entities/bussiness-unit.entity';
import { BaseEntity } from 'src/config/base.entity';
import { IGroup } from 'src/interfaces';
import { UsersEntity } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity({ name: 'group' })
export class Group extends BaseEntity implements IGroup {
  @Column()
  name: string;
  @OneToMany(() => UsersEntity, (user) => user.group)
  user: UsersEntity[];
  @ManyToOne(() => BussinessUnit, (bussinessUnit) => bussinessUnit.group)
  @JoinColumn({ name: 'bussinessUnit_id' })
  bussinessUnit: BussinessUnit;
}
