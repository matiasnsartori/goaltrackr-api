import { Injectable } from '@nestjs/common';
import { UpdateAttendanceDto } from '../dto/update-attendance.dto';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from '../entities/attendance.entity';
import { ErrorManager } from 'src/utils/error.manager';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly groupRepository: Repository<Attendance>,
  ) {}
  public async create(
    CreateAttendanceDto: CreateAttendanceDto,
  ): Promise<Attendance> {
    try {
      return this.groupRepository.save(CreateAttendanceDto);
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  findAll() {
    return `This action returns all attendance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`;
  }

  update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
    return `This action updates a #${id} attendance`;
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`;
  }
}
