import { Controller, Get, Query, Req, Body, Post, Put, Delete, Param, Logger } from '@nestjs/common';
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
  getAll(@ParsedRequest() req: CrudRequest) {
    // tslint:disable-next-line: no-console
    console.log(req);
    return this.base.getManyBase(req);
  }
}
