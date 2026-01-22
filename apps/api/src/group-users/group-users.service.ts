import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { GroupUsers, Prisma } from '../generated/prisma/client';

@Injectable()
export class GroupUsersService {
  constructor(private prisma: PrismaService) { }
  findGUsersByGId(where: Prisma.GroupUsersWhereInput): Promise<GroupUsers[]> {
    return this.prisma.groupUsers.findMany({
      where,
    });
  }

  create(data: Prisma.GroupUsersCreateInput): Promise<GroupUsers> {
    return this.prisma.groupUsers.create({
      data,
    });
  }
}
