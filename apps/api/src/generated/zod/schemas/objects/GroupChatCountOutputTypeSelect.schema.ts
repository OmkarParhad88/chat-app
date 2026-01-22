import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCountOutputTypeCountChatsArgsObjectSchema as GroupChatCountOutputTypeCountChatsArgsObjectSchema } from './GroupChatCountOutputTypeCountChatsArgs.schema';
import { GroupChatCountOutputTypeCountGroupUsersArgsObjectSchema as GroupChatCountOutputTypeCountGroupUsersArgsObjectSchema } from './GroupChatCountOutputTypeCountGroupUsersArgs.schema'

const makeSchema = () => z.object({
  Chats: z.union([z.boolean(), z.lazy(() => GroupChatCountOutputTypeCountChatsArgsObjectSchema)]).optional(),
  GroupUsers: z.union([z.boolean(), z.lazy(() => GroupChatCountOutputTypeCountGroupUsersArgsObjectSchema)]).optional()
}).strict();
export const GroupChatCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.GroupChatCountOutputTypeSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCountOutputTypeSelect>;
export const GroupChatCountOutputTypeSelectObjectZodSchema = makeSchema();
