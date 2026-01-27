import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatArgsObjectSchema as GroupChatArgsObjectSchema } from './GroupChatArgs.schema'

const makeSchema = () => z.object({
  group: z.union([z.boolean(), z.lazy(() => GroupChatArgsObjectSchema)]).optional()
}).strict();
export const GroupUserIncludeObjectSchema: z.ZodType<Prisma.GroupUserInclude> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserInclude>;
export const GroupUserIncludeObjectZodSchema = makeSchema();
