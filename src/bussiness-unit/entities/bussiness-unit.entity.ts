import { BaseEntity } from '../../config/base.entity';
import { IBussinessUnit } from '../../interfaces/bussiness_unit.interface';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'bussiness-unit' })
export class BussinessUnit extends BaseEntity implements IBussinessUnit {
  @Column()
  name: string;
}
