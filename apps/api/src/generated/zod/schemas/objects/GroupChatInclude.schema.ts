import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ChatsFindManySchema as ChatsFindManySchema } from '../findManyChats.schema';
import { GroupUsersFindManySchema as GroupUsersFindManySchema } from '../findManyGroupUsers.schema';
import { GroupChatCountOutputTypeArgsObjectSchema as GroupChatCountOutputTypeArgsObjectSchema } from './GroupChatCountOutputTypeArgs.schema'

const makeSchema = () => z.object({
  user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  Chats: z.union([z.boolean(), z.lazy(() => ChatsFindManySchema)]).optional(),
  GroupUsers: z.union([z.boolean(), z.lazy(() => GroupUsersFindManySchema)]).optional(),
  _count: z.union([z.boolean(), z.lazy(() => GroupChatCountOutputTypeArgsObjectSchema)]).optional()
}).strict();
export const GroupChatIncludeObjectSchema: z.ZodType<Prisma.GroupChatInclude> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatInclude>;
export const GroupChatIncludeObjectZodSchema = makeSchema();
