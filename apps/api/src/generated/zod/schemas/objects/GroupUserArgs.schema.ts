import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './GroupUserSelect.schema';
import { GroupUserIncludeObjectSchema as GroupUserIncludeObjectSchema } from './GroupUserInclude.schema'

const makeSchema = () => z.object({
  select: z.lazy(() => GroupUserSelectObjectSchema).optional(),
  include: z.lazy(() => GroupUserIncludeObjectSchema).optional()
}).strict();
export const GroupUserArgsObjectSchema = makeSchema();
export const GroupUserArgsObjectZodSchema = makeSchema();
