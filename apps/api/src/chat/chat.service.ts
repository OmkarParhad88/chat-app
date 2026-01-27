import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { CreateChatDto } from './dto/chat.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) { }

  async create(createChatDto: Prisma.ChatCreateInput) {
    return await this.prisma.chat.create({
      data: createChatDto,
    });
  }

  async findByGroupId(where: Prisma.ChatWhereInput) {
    return await this.prisma.chat.findMany({
      where,
    });
  }
}
