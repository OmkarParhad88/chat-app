import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatArgsObjectSchema as GroupChatArgsObjectSchema } from './GroupChatArgs.schema'

const makeSchema = () => z.object({
  group: z.union([z.boolean(), z.lazy(() => GroupChatArgsObjectSchema)]).optional()
}).strict();
export const GroupUsersIncludeObjectSchema: z.ZodType<Prisma.GroupUsersInclude> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersInclude>;
export const GroupUsersIncludeObjectZodSchema = makeSchema();
