import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ErrorManager } from 'src/utils/error.manager';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly userRepository: Repository<UsersEntity>,
  ) {}
  public async createUser(createUserDto: CreateUserDto): Promise<UsersEntity> {
    try {
      createUserDto.password = await bcrypt.hash(createUserDto.password, 10);
      return await this.userRepository.save(createUserDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  public async findAllUsers(): Promise<UsersEntity[]> {
    try {
      const users: UsersEntity[] = await this.userRepository.find();
      if (users.length === 0)
        throw new ErrorManager({
          type: 'NOT_FOUND',
          message: 'Users not found',
        });
      return users;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findUserById(id: string): Promise<UsersEntity> {
    try {
      const user: UsersEntity = await this.userRepository
        .createQueryBuilder('user')
        .where({ id })
        .leftJoinAndSelect('user.group', 'group')
        .leftJoinAndSelect('user.bussinessUnit', 'bussinessUnit')
        .leftJoinAndSelect('user.attendance', 'attendance')
        .getOne();
      if (!user) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'User not found',
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UpdateResult | undefined> {
    try {
      const user: UpdateResult = await this.userRepository.update(
        id,
        updateUserDto,
      );
      if (user.affected === 0) throw new Error('User not found');
      return user;
    } catch (error) {
      //createSignatureError es un metodo estatico de la clase ErrorManager por ende no necesita ser instanciado con new.
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async findBy({
    key,
    value,
  }: {
    key: keyof CreateUserDto;
    value: any;
  }) {
    try {
      const user: UsersEntity = await this.userRepository
        .createQueryBuilder('user')
        .addSelect('user.password')
        .where({ [key]: value })
        .getOne();

      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }

  public async deleteUser(id: number): Promise<DeleteResult | undefined> {
    try {
      const user: DeleteResult = await this.userRepository.delete(id);
      if (user.affected === 0) {
        throw new ErrorManager({
          type: 'BAD_REQUEST',
          message: 'Cannot delete user',
        });
      }
      return user;
    } catch (error) {
      throw ErrorManager.createSignatureError(error.message);
    }
  }
}
