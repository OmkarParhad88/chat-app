import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCountOutputTypeCountChatGroupsArgsObjectSchema as UserCountOutputTypeCountChatGroupsArgsObjectSchema } from './UserCountOutputTypeCountChatGroupsArgs.schema';

const makeSchema = () =>
  z
    .object({
      chatGroups: z
        .union([
          z.boolean(),
          z.lazy(() => UserCountOutputTypeCountChatGroupsArgsObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const UserCountOutputTypeSelectObjectSchema: z.ZodType<Prisma.UserCountOutputTypeSelect> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCountOutputTypeSelect>;
export const UserCountOutputTypeSelectObjectZodSchema = makeSchema();
