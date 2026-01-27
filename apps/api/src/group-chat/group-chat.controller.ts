import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Param,
  Query,
  NotFoundException,
  HttpStatus,
  HttpCode,
  Put,
  Delete,
} from '@nestjs/common';
import { GroupChatService } from './group-chat.service';
import {
  CreateGroupChatDto,
  GroupChatWhereInputDto,
  GroupChatWhereUniqueDto,
  UpdateGroupChatDto,
} from './dto/group-chat.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('group-chat')
export class GroupChatController {
  constructor(private readonly groupChatService: GroupChatService) { }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Post()
  async create(@Body() createGroupChatDto: CreateGroupChatDto) {
    const group = await this.groupChatService.store(createGroupChatDto);
    return { message: 'Group chart has been created', data: group };
  }

  @HttpCode(HttpStatus.OK)
  @Get(':id')
  async findGChatByGroupId(@Param() { id }: GroupChatWhereUniqueDto) {
    const group = await this.groupChatService.findGChatByGroupId({
      id,
    });

    if (!group) {
      throw new NotFoundException(`GroupChat by id ${id} not found`);
    }
    return { message: 'Success', data: group };
  }

  @UseGuards(AuthGuard)
  @Get()
  async findGChats(@Query() data: GroupChatWhereInputDto) {
    const group = await this.groupChatService.findGChatsByUserId(data);

    if (!group) {
      throw new NotFoundException(
        `GroupChats by User_id ${JSON.stringify(data)} not found`,
      );
    }
    return { message: 'Success', data: group };
  }

  @HttpCode(HttpStatus.OK)
  @Put(':id')
  async update(
    @Param() { id }: GroupChatWhereUniqueDto,
    @Body() updateGroupChatDto: UpdateGroupChatDto,
  ) {
    const group = await this.groupChatService.update(
      { id },
      updateGroupChatDto,
    );
    return { message: 'Group chat has been updated', data: group };
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  async delete(@Param() { id }: GroupChatWhereUniqueDto) {
    const group = await this.groupChatService.delete({ id });
    return { message: 'Group chat has been deleted', data: group };
  }
}
