import { Body, Controller, Get, Logger, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService) {
  }

  @Get('/users')
  async getAll() {
    return this.userService.findAll();
  }

  @Get('/users/:id')
  async getOne(@Param('id') id: string) {
    return this.userService.find(id);
  }

  @Post('/register')
  async register(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('age') age: number,
  ) {
    return this.userService.create({ firstName, lastName, age });
  }
}
