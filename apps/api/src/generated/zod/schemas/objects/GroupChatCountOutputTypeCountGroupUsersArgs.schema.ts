import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './GroupUsersWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupUsersWhereInputObjectSchema).optional()
}).strict();
export const GroupChatCountOutputTypeCountGroupUsersArgsObjectSchema = makeSchema();
export const GroupChatCountOutputTypeCountGroupUsersArgsObjectZodSchema = makeSchema();
