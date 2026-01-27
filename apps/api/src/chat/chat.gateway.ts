import 'dotenv/config';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketServer,
  WsResponse,
  WsException,
} from '@nestjs/websockets';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  Logger,
  UseFilters,
  UseGuards,
  WebSocketAdapter,
  WsMessageHandler,
} from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { CreateChatDto, MessageType, SendMessageDto } from './dto/chat.dto';
import { ChatGatewayGuard } from './chat.guard';
import { WsExceptionFilter } from '@/config/ws-exception.filter';
import { ChatService } from './chat.service';
import { z, ZodError } from 'zod';
import { ChatCreateInputObjectZodSchema } from '@prisma-zod/objects/ChatCreateInput.schema';
import { Prisma } from '@/generated/prisma/client';


type ReturnMessageType = {
  event: string;
  data: MessageType;
};

const port = Number(process.env.SOCKET_PORT);
@WebSocketGateway(port, {
  cors: { origin: '*' },
  transports: ['websocket', 'polling'],
})
@UseGuards(ChatGatewayGuard)
@UseFilters(WsExceptionFilter)
export class ChatGateway
  implements
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect {
  private logger = new Logger(ChatGateway.name, {
    timestamp: true,
  });

  constructor(private readonly chatService: ChatService) { }

  @WebSocketServer()
  server: Server;


  afterInit(server: Server) {
    server.use((client: Socket, next: (err?: any) => void) => {
      void (async () => {
        try {
          const room =
            client.handshake.headers.room || client.handshake.auth.room;
          if (!room) {
            throw new WsException('Invalid room, pass correct room ID');
          }
          client.rooms.add(room);
          client.room = room;
          await client.join(room);
          next();
        } catch (error) {
          next(error);
        }
      })();
    });
    this.logger.log('Server initialized');
  }

  handleConnection(client: Socket) {
    this.logger.log('Client connected:', client.id, client.rooms);
  }

  handleDisconnect(client: Socket) {
    this.logger.log('Client disconnected:', client.id, client.rooms);
  }

  @SubscribeMessage('new_message')
  handleNewMessageEvent(
    @MessageBody() data: any,
    @ConnectedSocket() client: Socket,
  ) {
    const room = client.room as string;
    this.logger.log('Message received:', 'this is log msg');
    client.to(room).emit('new_message', data);
  }

  @SubscribeMessage('message')
  async handleMessagesEvent(
    @MessageBody() data: CreateChatDto,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = ChatCreateInputObjectZodSchema.parse(data);

      if (!client.room) {
        throw new WsException('Invalid room, pass correct room ID');
      }
      await this.chatService.create(result);
      client.to(client.room).emit('message', data);
    } catch (error) {

      if (error instanceof ZodError) {
        throw new WsException(JSON.stringify(error.issues));
      }
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new WsException(JSON.stringify(error.meta));
      }
      throw error;
    }
  }
}
