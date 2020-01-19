import { Controller, Get, Query, Req, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { Crud, CrudController, CrudOptions, Override, ParsedRequest, CrudRequest } from '@nestjsx/crud';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';
import { User } from './user.entity';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: {
    type: User,
  },
})
@ApiTags('User')
@Controller('api/users')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) { }

  get base(): CrudController<User> {
    return this;
  }

  @Override('getManyBase')
  getManyBase(@ParsedRequest() req: CrudRequest) {
    return this.base.getManyBase(req);
  }

  // @Get()
  // async indAll(): Promise<UserDTO[]> {
  //   return await this.service.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string): Promise<UserDTO> {
  //   return await this.service.findOne(Number(id));
  // }

  // @Post()
  // async create(@Body() data: UserDTO): Promise<UserDTO> {
  //   return await this.service.create(data);
  // }

  // @Put(':id')
  // async update(@Param('id') id: string, @Body() data: Partial<UserDTO>): Promise<UserDTO> {
  //   return await this.service.update(Number(id), data);
  // }

  // @Delete(':id')
  // async delete(@Param('id') id: string): Promise<UserDTO> {
  //   return await this.service.delete(Number(id));
  // }
}
