import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './GroupUsersInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GroupUsersSelectObjectSchema).optional(),
  include: z.lazy(() => GroupUsersIncludeObjectSchema).optional()
}).strict();
export const GroupUsersArgsObjectSchema = makeSchema();
export const GroupUsersArgsObjectZodSchema = makeSchema();
