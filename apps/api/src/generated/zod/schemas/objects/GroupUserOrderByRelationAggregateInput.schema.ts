import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const GroupUserOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.GroupUserOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserOrderByRelationAggregateInput>;
export const GroupUserOrderByRelationAggregateInputObjectZodSchema = makeSchema();
