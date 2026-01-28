import { Module } from '@nestjs/common';
import { Partitioners } from 'kafkajs';
import { ChatService } from '@/chat/chat.service';
import { PrismaModule } from '@/database/prisma.module';
import { ChatGateway } from '@/chat/chat.gateway';
import { ChatController } from './chat.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KAFKA_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['localhost:9092'],
            retry: {
              retries: 10,
              initialRetryTime: 500,
            },
          },
          consumer: {
            groupId: 'chat-app-consumer-client',
          },
          producer: {
            createPartitioner: Partitioners.LegacyPartitioner,
            allowAutoTopicCreation: true,
          },
        },
      },
    ]),
    PrismaModule,
  ],
  providers: [ChatService, ChatGateway],
  controllers: [ChatController],
})
export class ChatModule {}
