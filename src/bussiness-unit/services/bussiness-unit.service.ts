import { Injectable } from '@nestjs/common';
import { CreateBussinessUnitDto } from '../dto/create-bussiness-unit.dto';
import { UpdateBussinessUnitDto } from '../dto/update-bussiness-unit.dto';

@Injectable()
export class BussinessUnitService {
  create(createBussinessUnitDto: CreateBussinessUnitDto) {
    return 'This action adds a new bussinessUnit';
  }

  findAll() {
    return `This action returns all bussinessUnit`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bussinessUnit`;
  }

  update(id: number, updateBussinessUnitDto: UpdateBussinessUnitDto) {
    return `This action updates a #${id} bussinessUnit`;
  }

  remove(id: number) {
    return `This action removes a #${id} bussinessUnit`;
  }
}
