import { Controller, Get, Query, Req, Body, Post, Put, Delete, Param } from '@nestjs/common';
import { UserDTO } from './user.dto';

@Controller('api/users')
export class UserController {
  @Get()
  findAll(): string {
    return 'All users';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `User ${id}`;
  }

  @Post()
  create(@Body() data: UserDTO): string {
    return `Create user ${JSON.stringify(data)}`;
  }

  @Put(':id')
  update(@Param('id') id: string): string {
    return `Update user ${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string): string {
    return `Delete user ${id}`;
  }
}
