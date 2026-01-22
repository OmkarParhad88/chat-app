import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatArgsObjectSchema as GroupChatArgsObjectSchema } from './GroupChatArgs.schema'

const makeSchema = () => z.object({
  id: z.boolean().optional(),
  group: z.union([z.boolean(), z.lazy(() => GroupChatArgsObjectSchema)]).optional(),
  group_id: z.boolean().optional(),
  name: z.boolean().optional(),
  created_at: z.boolean().optional()
}).strict();
export const GroupUsersSelectObjectSchema: z.ZodType<Prisma.GroupUsersSelect> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersSelect>;
export const GroupUsersSelectObjectZodSchema = makeSchema();
