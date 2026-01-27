import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './ChatWhereInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => ChatWhereInputObjectSchema).optional()
}).strict();
export const GroupChatCountOutputTypeCountChatsArgsObjectSchema = makeSchema();
export const GroupChatCountOutputTypeCountChatsArgsObjectZodSchema = makeSchema();
