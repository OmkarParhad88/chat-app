import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatFindManySchema as GroupChatFindManySchema } from '../findManyGroupChat.schema';
import { UserCountOutputTypeArgsObjectSchema as UserCountOutputTypeArgsObjectSchema } from './UserCountOutputTypeArgs.schema';

const makeSchema = () =>
  z
    .object({
      id: z.boolean().optional(),
      name: z.boolean().optional(),
      email: z.boolean().optional(),
      provider: z.boolean().optional(),
      image: z.boolean().optional(),
      oauth_id: z.boolean().optional(),
      created_at: z.boolean().optional(),
      chatGroups: z
        .union([z.boolean(), z.lazy(() => GroupChatFindManySchema)])
        .optional(),
      _count: z
        .union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)])
        .optional(),
    })
    .strict();
export const UserSelectObjectSchema: z.ZodType<Prisma.UserSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.UserSelect>;
export const UserSelectObjectZodSchema = makeSchema();
