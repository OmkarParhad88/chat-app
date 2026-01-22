import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { IntWithAggregatesFilterObjectSchema as IntWithAggregatesFilterObjectSchema } from './IntWithAggregatesFilter.schema';
import { UuidWithAggregatesFilterObjectSchema as UuidWithAggregatesFilterObjectSchema } from './UuidWithAggregatesFilter.schema';
import { StringWithAggregatesFilterObjectSchema as StringWithAggregatesFilterObjectSchema } from './StringWithAggregatesFilter.schema';
import { DateTimeWithAggregatesFilterObjectSchema as DateTimeWithAggregatesFilterObjectSchema } from './DateTimeWithAggregatesFilter.schema'

const groupusersscalarwherewithaggregatesinputSchema = z.object({
  AND: z.union([z.lazy(() => GroupUsersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GroupUsersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => GroupUsersScalarWhereWithAggregatesInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => GroupUsersScalarWhereWithAggregatesInputObjectSchema), z.lazy(() => GroupUsersScalarWhereWithAggregatesInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number().int()]).optional(),
  group_id: z.union([z.lazy(() => UuidWithAggregatesFilterObjectSchema), z.uuid()]).optional(),
  name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  created_at: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const GroupUsersScalarWhereWithAggregatesInputObjectSchema: z.ZodType<Prisma.GroupUsersScalarWhereWithAggregatesInput> = groupusersscalarwherewithaggregatesinputSchema as unknown as z.ZodType<Prisma.GroupUsersScalarWhereWithAggregatesInput>;
export const GroupUsersScalarWhereWithAggregatesInputObjectZodSchema = groupusersscalarwherewithaggregatesinputSchema;
