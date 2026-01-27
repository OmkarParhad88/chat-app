import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get(':groupId')
  async findByGroupId(@Param('groupId') groupId: string) {
    const chats = await this.chatService.findByGroupId({ group_id: groupId });
    return { message: 'Chats fetched successfully', data: chats };
  }
}
