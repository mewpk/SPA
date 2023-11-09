import { Controller, Get, Post ,Body} from '@nestjs/common';
import { UserService } from './user.service';
import { userDTO } from './dto';

@Controller("/api/user")
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get()
    getUsers() {
      return this.userService.getUsers();
    }
    @Post()
    createUser(@Body() dto:userDTO ) {
      return this.userService.createUser(dto);
    }



}
