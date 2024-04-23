import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Put,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipe/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  //   @Get()
  //   getUsers() {
  //     return [{ username: 'nishanth', email: 'nishanth@gmail.com' }];
  //   }

  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
  }

  // @Get()
  // getUser(@Query('sortBy') sortBy: string) {
  //   console.log(sortBy);
  //   return [{ username: 'nishanth', email: 'nishanth@gmail.com' }];
  // }

  @Get()
  getUser(@Query('sortByDesc', ParseBoolPipe) sortByDesc: boolean) {
    console.log(sortByDesc);
    return [{ username: 'nishanth', email: 'nishanth@gmail.com' }];
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'nishanth',
        email: 'nishanth@gmail.com',
        posts: [
          { id: 1, title: 'post1' },
          { id: 2, title: 'post2' },
        ],
      },
    ];
  }

  @Get('posts/comments')
  getUsersPostsComments() {
    return [{ id: 1, title: 'post1', comments: [] }];
  }

  //   @Post()
  //   createUser(@Req() request: Request, @Res() response: Response) {
  //     console.log(request.body);
  //     // response.send(request.body);
  //     response.send('Created');
  //   }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    console.log(userData.age.toPrecision(), '*****userData userData****');
    return this.userService.createUser(userData);
  }

  // @Get(':id/:postId')
  // getUserById(@Param('id') id: string, @Param('postId') postId: string) {
  //   console.log(id, postId);
  //   return { id, postId };

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user) throw new HttpException('User is not found', HttpStatus.BAD_REQUEST);
    return user
  }

  @Put('update')
  updateUser(@Body() userData: CreateUserDto) {
    console.log(userData, '****update*****');
    return {};
  }

  @Delete('delete/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    console.log(id, '****delete*****');
    return {};
  }
}
