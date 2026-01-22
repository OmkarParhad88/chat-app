import { Module } from '@nestjs/common';
import { GroupUsersService } from './group-users.service';
import { GroupUsersController } from './group-users.controller';
import { PrismaModule } from '../database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GroupUsersController],
  providers: [GroupUsersService],
})
export class GroupUsersModule {}
