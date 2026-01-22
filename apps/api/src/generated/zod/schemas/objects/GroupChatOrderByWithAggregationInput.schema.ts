import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { GroupChatCountOrderByAggregateInputObjectSchema as GroupChatCountOrderByAggregateInputObjectSchema } from './GroupChatCountOrderByAggregateInput.schema';
import { GroupChatAvgOrderByAggregateInputObjectSchema as GroupChatAvgOrderByAggregateInputObjectSchema } from './GroupChatAvgOrderByAggregateInput.schema';
import { GroupChatMaxOrderByAggregateInputObjectSchema as GroupChatMaxOrderByAggregateInputObjectSchema } from './GroupChatMaxOrderByAggregateInput.schema';
import { GroupChatMinOrderByAggregateInputObjectSchema as GroupChatMinOrderByAggregateInputObjectSchema } from './GroupChatMinOrderByAggregateInput.schema';
import { GroupChatSumOrderByAggregateInputObjectSchema as GroupChatSumOrderByAggregateInputObjectSchema } from './GroupChatSumOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  user_id: SortOrderSchema.optional(),
  title: SortOrderSchema.optional(),
  passcode: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => GroupChatCountOrderByAggregateInputObjectSchema).optional(),
  _avg: z.lazy(() => GroupChatAvgOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => GroupChatMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => GroupChatMinOrderByAggregateInputObjectSchema).optional(),
  _sum: z.lazy(() => GroupChatSumOrderByAggregateInputObjectSchema).optional()
}).strict();
export const GroupChatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.GroupChatOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatOrderByWithAggregationInput>;
export const GroupChatOrderByWithAggregationInputObjectZodSchema = makeSchema();
