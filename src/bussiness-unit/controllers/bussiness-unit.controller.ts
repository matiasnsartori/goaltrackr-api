import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { CreateBussinessUnitDto } from '../dto/create-bussiness-unit.dto';
import { UpdateBussinessUnitDto } from '../dto/update-bussiness-unit.dto';
import { BussinessUnitService } from '../services/bussiness-unit.service';
import { BussinessUnit } from '../entities/bussiness-unit.entity';
import { ErrorManager } from 'src/utils/error.manager';
import { UpdateResult } from 'typeorm';

@Controller('bussiness-unit')
export class BussinessUnitController {
  constructor(private readonly bussinessUnitService: BussinessUnitService) {}

  @Post()
  create(
    @Body() createBussinessUnitDto: CreateBussinessUnitDto,
  ): Promise<BussinessUnit> {
    return this.bussinessUnitService.createBussinessUnit(
      createBussinessUnitDto,
    );
  }

  @Get()
  findAll() {
    return this.bussinessUnitService.findAll();
  }

  @Patch(':id')
  updateBussinessUnit(
    @Param('id') id: number,
    @Body() updateBussinessUnitDto: UpdateBussinessUnitDto,
  ): Promise<UpdateResult> {
    return this.bussinessUnitService.updateBussinessUnit(
      id,
      updateBussinessUnitDto,
    );
  }
}
