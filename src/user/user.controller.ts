import { Controller, Get, Query, Req, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get()
  async indAll(): Promise<UserDTO[]> {
    return await this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.findOne(id);
  }

  @Post()
  async create(@Body() data: UserDTO): Promise<UserDTO> {
    return await this.userService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<UserDTO>): Promise<UserDTO> {
    return await this.userService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserDTO> {
    return await this.userService.delete(id);
  }
}
