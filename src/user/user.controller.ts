import { Controller, Get, Query, Req, Body, Post, Put, Delete } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Get()
  findAll(): string {
    return 'All users';
  }

  @Get(':id')
  findOne(): string {
    return 'User';
  }

  @Post()
  create(): string {
    return 'Create user';
  }

  @Put(':id')
  update(): string {
    return 'Update user';
  }

  @Delete(':id')
  delete(): string {
    return 'Delete user';
  }
}
