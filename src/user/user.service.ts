import { Injectable, Logger } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Injectable()
export class UserService {
  findAll(): UserDTO[] {
    Logger.log([{ id: '1', name: 'Rinat', email: 'supervueman@gmail.com', password: 'password' }]);
    return [{ id: '1', name: 'Rinat', email: 'supervueman@gmail.com', password: 'password' }];
  }

  findOne(id: string): UserDTO {
    Logger.log(id);
    return { id: '1', name: 'Rinat', email: 'supervueman@gmail.com', password: 'password' };
  }

  create(data: UserDTO): UserDTO {
    Logger.log(data);
    return { id: '1', name: 'Rinat', email: 'supervueman@gmail.com', password: 'password' };
  }

  update(id: string, data: Partial<UserDTO>): UserDTO {
    Logger.log({ id, data });
    return { id: '1', name: 'Rinat', email: 'supervueman@gmail.com', password: 'password' };
  }

  delete(id: string): UserDTO {
    Logger.log(id);
    return { id: '1', name: 'Rinat', email: 'supervueman@gmail.com', password: 'password' };
  }
}
