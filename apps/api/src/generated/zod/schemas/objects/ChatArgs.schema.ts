import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './ChatSelect.schema';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './ChatInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChatSelectObjectSchema).optional(),
  include: z.lazy(() => ChatIncludeObjectSchema).optional()
}).strict();
export const ChatArgsObjectSchema = makeSchema();
export const ChatArgsObjectZodSchema = makeSchema();
