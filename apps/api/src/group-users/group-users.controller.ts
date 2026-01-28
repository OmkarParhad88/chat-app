import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { GroupUsersService } from '@/group-users/group-users.service';
import {
  GroupUserWhereInputDto,
  CreateGroupUserDto,
} from '@/group-users/dto/group-user.dto';

@Controller('group-user')
export class GroupUsersController {
  constructor(private readonly groupUsersService: GroupUsersService) {}

  @Post()
  async create(@Body() createGroupUserDto: CreateGroupUserDto) {
    const user = await this.groupUsersService.create(createGroupUserDto);
    return { message: 'User created successfully', data: user };
  }

  @Get()
  async findGUsersByGId(
    @Query() groupUserWhereInputDto: GroupUserWhereInputDto,
  ) {
    const users = await this.groupUsersService.findGUsersBy(
      groupUserWhereInputDto,
    );
    return { message: 'Users fetched successfully', data: users };
  }
}
