import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from '../user/dto/user.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/generated/prisma/client';
import { UserCreateInput } from 'src/generated/prisma/models';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(loginDto: CreateUserDto) {
    const findUser = await this.userService.user({
      email: loginDto.email as string,
    });
    let NewUser: User;
    if (!findUser) {
      NewUser = await this.userService.createUser(loginDto as UserCreateInput);
    } else {
      NewUser = findUser;
    }

    const JWT_Payload = {
      id: NewUser.id,
      name: NewUser.name,
      email: NewUser.email,
    };
    const JWT_Token = this.jwtService.sign(JWT_Payload);
    return {
      message: 'Login Successful',
      user: NewUser,
      token: `Bearer ${JWT_Token}`,
    };
  }

  register(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
