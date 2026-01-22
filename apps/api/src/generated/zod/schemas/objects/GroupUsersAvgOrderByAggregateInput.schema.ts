import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const GroupUsersAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersAvgOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersAvgOrderByAggregateInput>;
export const GroupUsersAvgOrderByAggregateInputObjectZodSchema = makeSchema();
