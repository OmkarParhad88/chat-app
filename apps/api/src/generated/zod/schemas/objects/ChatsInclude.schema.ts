import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatArgsObjectSchema as GroupChatArgsObjectSchema } from './GroupChatArgs.schema'

const makeSchema = () => z.object({
  group: z.union([z.boolean(), z.lazy(() => GroupChatArgsObjectSchema)]).optional()
}).strict();
export const ChatsIncludeObjectSchema: z.ZodType<Prisma.ChatsInclude> = makeSchema() as unknown as z.ZodType<Prisma.ChatsInclude>;
export const ChatsIncludeObjectZodSchema = makeSchema();
