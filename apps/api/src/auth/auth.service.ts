import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateLoginDto } from './dto/create-auth.dto';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from 'src/generated/prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) { }
  async login(loginDto: CreateLoginDto) {
    try {
      const findUser = await this.userService.user({
        email: loginDto.email,
      });
      let NewUser: User;
      if (!findUser) {
        NewUser = await this.userService.createUser(loginDto);
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
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  register(createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }
}
