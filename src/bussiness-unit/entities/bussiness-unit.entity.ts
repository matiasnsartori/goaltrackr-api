import { UsersEntity } from 'src/users/entities/user.entity';
import { BaseEntity } from '../../config/base.entity';
import { IBussinessUnit } from '../../interfaces/bussiness_unit.interface';
import { Column, Entity, OneToMany } from 'typeorm';
import { Group } from 'src/group/entities/group.entity';

@Entity({ name: 'bussiness-unit' })
export class BussinessUnit extends BaseEntity implements IBussinessUnit {
  @Column()
  name: string;
  @OneToMany(() => UsersEntity, (user) => user.bussinessUnit)
  user: UsersEntity[];
  @OneToMany(() => Group, (group) => group.bussinessUnit)
  group: Group[];
}
