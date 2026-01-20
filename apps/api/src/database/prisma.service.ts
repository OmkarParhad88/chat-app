import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (typeof connectionString !== 'string') {
      throw new Error('DATABASE_URL must be defined');
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
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
