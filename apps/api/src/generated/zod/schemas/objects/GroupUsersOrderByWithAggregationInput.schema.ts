import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GroupUsersCountOrderByAggregateInputObjectSchema as GroupUsersCountOrderByAggregateInputObjectSchema } from './GroupUsersCountOrderByAggregateInput.schema';
import { GroupUsersAvgOrderByAggregateInputObjectSchema as GroupUsersAvgOrderByAggregateInputObjectSchema } from './GroupUsersAvgOrderByAggregateInput.schema';
import { GroupUsersMaxOrderByAggregateInputObjectSchema as GroupUsersMaxOrderByAggregateInputObjectSchema } from './GroupUsersMaxOrderByAggregateInput.schema';
import { GroupUsersMinOrderByAggregateInputObjectSchema as GroupUsersMinOrderByAggregateInputObjectSchema } from './GroupUsersMinOrderByAggregateInput.schema';
import { GroupUsersSumOrderByAggregateInputObjectSchema as GroupUsersSumOrderByAggregateInputObjectSchema } from './GroupUsersSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  group_id: z.uuid().optional(),
  name: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => GroupUsersCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GroupUsersAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GroupUsersMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GroupUsersMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GroupUsersSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GroupUsersOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GroupUsersOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersOrderByWithAggregationInput>;
export const GroupUsersOrderByWithAggregationInputObjectZodSchema = makeSchema();
