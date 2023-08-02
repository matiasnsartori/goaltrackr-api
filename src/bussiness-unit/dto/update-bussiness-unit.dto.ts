import { PartialType } from '@nestjs/mapped-types';
import { CreateBussinessUnitDto } from './create-bussiness-unit.dto';

export class UpdateBussinessUnitDto extends PartialType(CreateBussinessUnitDto) {}
