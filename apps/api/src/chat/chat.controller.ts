import { Controller, Get, Param } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import { Inject } from '@nestjs/common';
import { ChatService } from '@/chat/chat.service';
import { CreateChatDto } from './dto/chat.dto';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf('chat-app-topic');
    await this.kafkaClient.connect();
  }

  @Get(':groupId')
  async findByGroupId(@Param('groupId') groupId: string) {
    const chats = await this.chatService.findByGroupId({ group_id: groupId });
    return { message: 'Chats fetched successfully', data: chats };
  }

  @MessagePattern('chat-app-topic')
  async handleMessage(
    @Payload()
    message: CreateChatDto,
  ) {
    try {
      await this.chatService.create(message);
    } catch (error) {
      console.error('Error saving message to database:', error);
    }
  }
}
