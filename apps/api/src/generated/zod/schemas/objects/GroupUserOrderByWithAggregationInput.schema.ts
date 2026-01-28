import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GroupUserCountOrderByAggregateInputObjectSchema as GroupUserCountOrderByAggregateInputObjectSchema } from './GroupUserCountOrderByAggregateInput.schema';
import { GroupUserAvgOrderByAggregateInputObjectSchema as GroupUserAvgOrderByAggregateInputObjectSchema } from './GroupUserAvgOrderByAggregateInput.schema';
import { GroupUserMaxOrderByAggregateInputObjectSchema as GroupUserMaxOrderByAggregateInputObjectSchema } from './GroupUserMaxOrderByAggregateInput.schema';
import { GroupUserMinOrderByAggregateInputObjectSchema as GroupUserMinOrderByAggregateInputObjectSchema } from './GroupUserMinOrderByAggregateInput.schema';
import { GroupUserSumOrderByAggregateInputObjectSchema as GroupUserSumOrderByAggregateInputObjectSchema } from './GroupUserSumOrderByAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: SortOrderSchema.optional(),
      group_id: z.uuid().optional(),
      name: SortOrderSchema.optional(),
      created_at: SortOrderSchema.optional(),
      _count: z
        .lazy(() => GroupUserCountOrderByAggregateInputObjectSchema)
        .optional(),
      _avg: z
        .lazy(() => GroupUserAvgOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z
        .lazy(() => GroupUserMaxOrderByAggregateInputObjectSchema)
        .optional(),
      _min: z
        .lazy(() => GroupUserMinOrderByAggregateInputObjectSchema)
        .optional(),
      _sum: z
        .lazy(() => GroupUserSumOrderByAggregateInputObjectSchema)
        .optional(),
    })
    .strict();
export const GroupUserOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GroupUserOrderByWithAggregationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserOrderByWithAggregationInput>;
export const GroupUserOrderByWithAggregationInputObjectZodSchema = makeSchema();
