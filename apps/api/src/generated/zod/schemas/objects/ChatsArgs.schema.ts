import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './ChatsSelect.schema';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './ChatsInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => ChatsSelectObjectSchema).optional(),
  include: z.lazy(() => ChatsIncludeObjectSchema).optional()
}).strict();
export const ChatsArgsObjectSchema = makeSchema();
export const ChatsArgsObjectZodSchema = makeSchema();
