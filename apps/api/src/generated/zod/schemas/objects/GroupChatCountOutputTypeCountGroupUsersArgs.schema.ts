import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './GroupUserWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUserWhereInputObjectSchema).optional()
}).strict();
export const GroupChatCountOutputTypeCountGroupUsersArgsObjectSchema = makeSchema();
export const GroupChatCountOutputTypeCountGroupUsersArgsObjectZodSchema = makeSchema();
