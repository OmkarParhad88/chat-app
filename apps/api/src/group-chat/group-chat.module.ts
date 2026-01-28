import { Module } from '@nestjs/common';
import { GroupChatService } from '@/group-chat/group-chat.service';
import { GroupChatController } from '@/group-chat/group-chat.controller';
import { PrismaModule } from '@/database/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [GroupChatController],
  providers: [GroupChatService],
})
export class GroupChatModule {}
