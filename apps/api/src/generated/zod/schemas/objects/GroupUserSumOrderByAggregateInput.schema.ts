import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
    })
    .strict();
export const GroupUserSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupUserSumOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserSumOrderByAggregateInput>;
export const GroupUserSumOrderByAggregateInputObjectZodSchema = makeSchema();
