import { BaseEntity } from '../../config/base.entity';
import { IAttendance } from '../../interfaces/attendance.interfce';
import { UsersEntity } from '../../users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'attendance' })
export class Attendance extends BaseEntity implements IAttendance {
  @Column()
  date: Date;
  @ManyToOne(() => UsersEntity, (user) => user.attendance) // Esta es una relación de muchos a uno, muchas asistencias pueden tener un usuario, bidireccionalmente se puede acceder al usuario desde la asistencia y viceversa.
  @JoinColumn({ name: 'user_id' }) // Esta es la columna que se va a crear en la tabla de asistencias para relacionarla con la tabla de usuarios. la relacion siempre se hace en la entidad debil. osea en la q hay muchos.
  user: UsersEntity;
}
