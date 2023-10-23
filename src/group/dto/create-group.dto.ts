import { IsEnum, IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { BussinessUnit } from 'src/bussiness-unit/entities/bussiness-unit.entity';
import { GROUPS } from 'src/constants';
import { IGroup } from 'src/interfaces';

export class CreateGroupDto implements IGroup {
  @IsString()
  @IsNotEmpty()
  @IsEnum(GROUPS)
  name: string;
  @IsUUID()
  @IsNotEmpty()
  bussinessUnit: BussinessUnit;
}
