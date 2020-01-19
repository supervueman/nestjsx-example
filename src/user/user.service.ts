import { Injectable, Logger, HttpStatus, HttpException } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserDTO } from './user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmCrudService<User> {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    super(userRepository);
  }

  // async findAll(): Promise<UserDTO[]> {
  //   const users = await this.userRepository.find();
  //   Logger.log(users);
  //   return users;
  // }

  // async findByPk(id: number): Promise<UserDTO> {
  //   const user = await this.userRepository.findOne({ where: { id } });

  //   if (!user) {
  //     throw new HttpException('Error: ', HttpStatus.NOT_FOUND);
  //   }

  //   return user;
  // }

  // async create(data: UserDTO): Promise<UserDTO> {
  //   let user = await this.userRepository.create(data);
  //   user = await this.userRepository.save(user);
  //   return user;
  // }

  // async update(id: number, data: Partial<UserDTO>): Promise<UserDTO> {
  //   const user = await this.userRepository.findOne({ where: { id } });

  //   if (!user) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }

  //   await this.userRepository.update({ id }, data);

  //   return await this.userRepository.findOne({ where: { id } });
  // }

  // async delete(id: number): Promise<UserDTO> {
  //   const user = await this.userRepository.findOne({ where: { id } });

  //   if (!user) {
  //     throw new HttpException('Not found', HttpStatus.NOT_FOUND);
  //   }

  //   await this.userRepository.delete(id);
  //   Logger.log(id);
  //   return await this.userRepository.findOne({ where: { id } });
  // }
}
