import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      group_id: z.uuid().optional(),
      name: SortOrderSchema.optional(),
      created_at: SortOrderSchema.optional(),
    })
    .strict();
export const GroupUserCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupUserCountOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserCountOrderByAggregateInput>;
export const GroupUserCountOrderByAggregateInputObjectZodSchema = makeSchema();
