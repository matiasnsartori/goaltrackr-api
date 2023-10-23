import { IsEnum, IsString } from 'class-validator';
import { BUSSINESS_UNITS } from 'src/constants';
import { IBussinessUnit } from 'src/interfaces';

export class CreateBussinessUnitDto implements IBussinessUnit {
  @IsString()
  @IsEnum(BUSSINESS_UNITS)
  name: string;
}
