import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { GroupChat, Prisma } from '../generated/prisma/client';

@Injectable()
export class GroupChatService {
  constructor(private prisma: PrismaService) {}
  async store(data: Prisma.GroupChatCreateInput): Promise<GroupChat | null> {
    return await this.prisma.groupChat.create({
      data,
    });
  }

  async findGChatsByUserId(
    where: Prisma.GroupChatWhereInput,
  ): Promise<GroupChat[] | null> {
    return await this.prisma.groupChat.findMany({
      where,
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findGChatByGroupId(
    where: Prisma.GroupChatWhereUniqueInput,
  ): Promise<GroupChat | null> {
    return await this.prisma.groupChat.findUnique({
      where,
    });
  }

  async update(
    where: Prisma.GroupChatWhereUniqueInput,
    data: Prisma.GroupChatUpdateInput,
  ): Promise<GroupChat | null> {
    return await this.prisma.groupChat.update({
      where,
      data,
    });
  }

  async delete(
    where: Prisma.GroupChatWhereUniqueInput,
  ): Promise<GroupChat | null> {
    return await this.prisma.groupChat.delete({
      where,
    });
  }
}
