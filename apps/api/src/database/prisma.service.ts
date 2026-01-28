import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor(configService: ConfigService) {
    const connectionString = configService.get<string>('DATABASE_URL');

    if (typeof connectionString !== 'string') {
      throw new Error('DATABASE_URL must be defined');
    }

    const pool = new Pool({
      connectionString,
    });
    const adapter = new PrismaPg(pool);
    super({
      adapter,
      log: ['warn', 'error'],
    });
  }
}
