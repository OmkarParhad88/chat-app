import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  group_id: z.uuid().optional(),
  name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const GroupUsersMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersMaxOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersMaxOrderByAggregateInput>;
export const GroupUsersMaxOrderByAggregateInputObjectZodSchema = makeSchema();
