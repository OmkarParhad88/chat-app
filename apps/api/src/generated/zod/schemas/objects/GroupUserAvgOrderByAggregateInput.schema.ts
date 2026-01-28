import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
    })
    .strict();
export const GroupUserAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupUserAvgOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserAvgOrderByAggregateInput>;
export const GroupUserAvgOrderByAggregateInputObjectZodSchema = makeSchema();
