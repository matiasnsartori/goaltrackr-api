import { Module } from '@nestjs/common';
import { BussinessUnitController } from './controllers/bussiness-unit.controller';
import { BussinessUnitService } from './services/bussiness-unit.service';

@Module({
  controllers: [BussinessUnitController],
  providers: [BussinessUnitService],
})
export class BussinessUnitModule {}
