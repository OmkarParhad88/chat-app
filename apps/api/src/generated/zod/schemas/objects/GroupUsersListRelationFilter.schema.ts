import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './GroupUsersWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => GroupUsersWhereInputObjectSchema).optional(),
  some: z.lazy(() => GroupUsersWhereInputObjectSchema).optional(),
  none: z.lazy(() => GroupUsersWhereInputObjectSchema).optional()
}).strict();
export const GroupUsersListRelationFilterObjectSchema: z.ZodType<Prisma.GroupUsersListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersListRelationFilter>;
export const GroupUsersListRelationFilterObjectZodSchema = makeSchema();
