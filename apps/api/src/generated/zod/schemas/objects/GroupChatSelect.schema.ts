import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserArgsObjectSchema as UserArgsObjectSchema } from './UserArgs.schema';
import { ChatFindManySchema as ChatFindManySchema } from '../findManyChat.schema';
import { GroupUserFindManySchema as GroupUserFindManySchema } from '../findManyGroupUser.schema';
import { GroupChatCountOutputTypeArgsObjectSchema as GroupChatCountOutputTypeArgsObjectSchema } from './GroupChatCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      user: z
        .union([z.boolean(), z.lazy(() => UserArgsObjectSchema)])
        .optional(),
      user_id: z.boolean().optional(),
      title: z.boolean().optional(),
      passcode: z.boolean().optional(),
      created_at: z.boolean().optional(),
      Chats: z
        .union([z.boolean(), z.lazy(() => ChatFindManySchema)])
        .optional(),
      GroupUsers: z
        .union([z.boolean(), z.lazy(() => GroupUserFindManySchema)])
        .optional(),
      _count: z
        .union([
          z.boolean(),
          z.lazy(() => GroupChatCountOutputTypeArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const GroupChatSelectObjectSchema: z.ZodType<Prisma.GroupChatSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatSelect>;
export const GroupChatSelectObjectZodSchema = makeSchema();
