import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { GroupUsersService } from './group-users.service';
import {
  GroupUsersWhereInputDto,
  CreateGroupUserDto,
} from './dto/group-user.dto';

@Controller('group-users')
export class GroupUsersController {
  constructor(private readonly groupUsersService: GroupUsersService) {}

  @Post()
  create(@Body() createGroupUserDto: CreateGroupUserDto) {
    return this.groupUsersService.create(createGroupUserDto);
  }

  @Get()
  findGUsersByGId(@Query() groupUsersWhereInputDto: GroupUsersWhereInputDto) {
    return this.groupUsersService.findGUsersByGId(groupUsersWhereInputDto);
  }
}
