import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './ChatsWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatsWhereInputObjectSchema).optional()
}).strict();
export const GroupChatCountOutputTypeCountChatsArgsObjectSchema = makeSchema();
export const GroupChatCountOutputTypeCountChatsArgsObjectZodSchema = makeSchema();
