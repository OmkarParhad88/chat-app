import 'dotenv/config';
import {
  ConnectedSocket,
  MessageBody,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsException,
} from '@nestjs/websockets';
import { Inject, Logger, UseFilters } from '@nestjs/common';
import { Server, Socket } from 'socket.io';
import { CreateChatDto } from '@/chat/dto/chat.dto';
import { WsExceptionFilter } from '@/chat/chat.filter';
import { ChatService } from '@/chat/chat.service';
import { ChatCreateInputObjectZodSchema } from '@prisma-zod/objects/ChatCreateInput.schema';
import { ZodError } from 'zod';
import { Prisma } from '@prisma/prisma/client';
import { ClientKafka } from '@nestjs/microservices';

const port = Number(process.env.SOCKET_PORT);
@WebSocketGateway(port, {
  cors: { origin: '*' },
  transports: ['websocket', 'polling'],
})
@UseFilters(WsExceptionFilter)
export class ChatGateway implements OnGatewayInit {
  private logger = new Logger(ChatGateway.name, {
    timestamp: true,
  });

  constructor(
    private readonly chatService: ChatService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) {}

  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    server.use((client: Socket, next: (err?: any) => void) => {
      void (async () => {
        try {
          const room =
            (client.handshake.headers.room as string) ||
            (client.handshake.auth.room as string);
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

  @SubscribeMessage('message')
  handleMessagesEvent(
    @MessageBody() data: CreateChatDto,
    @ConnectedSocket() client: Socket,
  ) {
    try {
      const result = ChatCreateInputObjectZodSchema.parse(data);

      if (!client.room) {
        throw new WsException('Invalid room, pass correct room ID');
      }
      this.kafkaClient.emit('chat-app-topic', result);
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
