import { Injectable } from '@nestjs/common';
import { UpdateAttendanceDto } from '../dto/update-attendance.dto';
import { CreateAttendanceDto } from '../dto/create-attendance.dto';

@Injectable()
export class AttendanceService {
  create(createAttendanceDto: CreateAttendanceDto) {
    return 'This action adds a new attendance';
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
