import {
  Controller,
  Get,
  Post,
  Body,
  // Patch,
  // Param,
  // Delete,
  UsePipes,
  // UseFilters,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, createUserSchema } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { ZodValidationPipe } from 'src/config/zodValidation.pipe';
// import { HttpExceptionFilter } from 'src/config/http-exception.filter';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UsePipes(new ZodValidationPipe(createUserSchema))
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAllUsers() {
    return 'this is all user';
  }

  // @Get(':id')
  // findOneUser(@Param('id') id: string) {
  //   return this.userService.users(+id);
  // }

  // @Patch(':id')
  // updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.updateUser(+id, updateUserDto);
  // }

  // @Delete(':id')
  // deleteUser(@Param('id') id: string) {
  //   return this.userService.deleteUser(+id);
  // }
}
