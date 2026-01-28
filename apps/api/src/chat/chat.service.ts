import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/prisma.service';
import { Chat, Prisma } from '@prisma/prisma/client';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async create(createChatDto: Prisma.ChatCreateInput): Promise<Chat | null> {
    return await this.prisma.chat.create({
      data: createChatDto,
    });
  }

  async findByGroupId(where: Prisma.ChatWhereInput): Promise<Chat[] | null> {
    return await this.prisma.chat.findMany({
      where,
    });
  }
}
