import { Module } from '@nestjs/common';
import { BussinessUnitController } from './controllers/bussiness-unit.controller';
import { BussinessUnitService } from './services/bussiness-unit.service';
import { BussinessUnit } from './entities/bussiness-unit.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([BussinessUnit])],
  controllers: [BussinessUnitController],
  providers: [BussinessUnitService],
})
export class BussinessUnitModule {}
