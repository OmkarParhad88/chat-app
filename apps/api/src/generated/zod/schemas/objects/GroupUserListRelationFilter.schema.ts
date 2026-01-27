import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './GroupUserWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GroupUserWhereInputObjectSchema).optional(),
  some: z.lazy(() => GroupUserWhereInputObjectSchema).optional(),
  none: z.lazy(() => GroupUserWhereInputObjectSchema).optional()
}).strict();
export const GroupUserListRelationFilterObjectSchema: z.ZodType<Prisma.GroupUserListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserListRelationFilter>;
export const GroupUserListRelationFilterObjectZodSchema = makeSchema();
