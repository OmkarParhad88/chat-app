import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
    })
    .strict();
export const UserCountOutputTypeCountChatGroupsArgsObjectSchema = makeSchema();
export const UserCountOutputTypeCountChatGroupsArgsObjectZodSchema =
  makeSchema();
