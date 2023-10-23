import { Injectable } from '@nestjs/common';
import { CreateBussinessUnitDto } from '../dto/create-bussiness-unit.dto';
import { UpdateBussinessUnitDto } from '../dto/update-bussiness-unit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BussinessUnit } from '../entities/bussiness-unit.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class BussinessUnitService {
  constructor(
    @InjectRepository(BussinessUnit)
    private readonly bussinessRepository: Repository<BussinessUnit>,
  ) {}
  public async createBussinessUnit(
    createBussinessUnitDto: CreateBussinessUnitDto,
  ): Promise<BussinessUnit> {
    try {
      return await this.bussinessRepository.save(createBussinessUnitDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findAll(): Promise<BussinessUnit[]> {
    try {
      return await this.bussinessRepository.find();
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateBussinessUnit(
    id: number,
    updateBussinessUnitDto: UpdateBussinessUnitDto,
  ): Promise<UpdateResult> {
    try {
      const unit: UpdateResult = await this.bussinessRepository.update(
        id,
        updateBussinessUnitDto,
      );
      if (unit.affected === 0) throw new Error('User not found');
      return unit;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
