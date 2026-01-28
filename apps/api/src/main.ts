import { NestFactory } from '@nestjs/core';
import { Partitioners } from 'kafkajs';
import { AppModule } from '@/app/app.module';
import { RequestMethod } from '@nestjs/common';
import { RedisIoAdapter } from '@/adapter/redis-io.adapter';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
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
      subscribe: {
        fromBeginning: true,
      },
    },
  });

  await app.startAllMicroservices();
  app.setGlobalPrefix('api', {
    exclude: [{ path: '/', method: RequestMethod.GET }],
  });
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  });

  const redisIoAdapter = new RedisIoAdapter(app);
  await redisIoAdapter.connectToRedis();
  app.useWebSocketAdapter(redisIoAdapter);

  await app.listen(process.env.PORT ?? 4000);
}

bootstrap();
