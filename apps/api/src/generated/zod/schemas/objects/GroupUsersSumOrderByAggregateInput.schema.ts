import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional()
}).strict();
export const GroupUsersSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersSumOrderByAggregateInput>;
export const GroupUsersSumOrderByAggregateInputObjectZodSchema = makeSchema();
