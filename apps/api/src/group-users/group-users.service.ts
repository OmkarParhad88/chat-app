import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/database/prisma.service';
import { GroupUser, Prisma } from '@prisma/prisma/client';

@Injectable()
export class GroupUsersService {
  constructor(private prisma: PrismaService) {}
  async findGUsersBy(where: Prisma.GroupUserWhereInput): Promise<GroupUser[]> {
    const users = await this.prisma.groupUser.findMany({
      where,
    });
    return users;
  }

  async create(data: Prisma.GroupUserCreateInput): Promise<GroupUser> {
    const user = await this.prisma.groupUser.create({
      data,
    });
    return user;
  }
}
