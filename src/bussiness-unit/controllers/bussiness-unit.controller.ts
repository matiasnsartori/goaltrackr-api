import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreateBussinessUnitDto } from '../dto/create-bussiness-unit.dto';
import { UpdateBussinessUnitDto } from '../dto/update-bussiness-unit.dto';
import { BussinessUnitService } from '../services/bussiness-unit.service';

@Controller('bussiness-unit')
export class BussinessUnitController {
  constructor(private readonly bussinessUnitService: BussinessUnitService) {}

  @Post()
  create(@Body() createBussinessUnitDto: CreateBussinessUnitDto) {
    return this.bussinessUnitService.create(createBussinessUnitDto);
  }

  @Get()
  findAll() {
    return this.bussinessUnitService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bussinessUnitService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBussinessUnitDto: UpdateBussinessUnitDto,
  ) {
    return this.bussinessUnitService.update(+id, updateBussinessUnitDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bussinessUnitService.remove(+id);
  }
}
