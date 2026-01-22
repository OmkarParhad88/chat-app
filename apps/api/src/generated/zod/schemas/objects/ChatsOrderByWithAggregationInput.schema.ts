import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChatsCountOrderByAggregateInputObjectSchema as ChatsCountOrderByAggregateInputObjectSchema } from './ChatsCountOrderByAggregateInput.schema';
import { ChatsMaxOrderByAggregateInputObjectSchema as ChatsMaxOrderByAggregateInputObjectSchema } from './ChatsMaxOrderByAggregateInput.schema';
import { ChatsMinOrderByAggregateInputObjectSchema as ChatsMinOrderByAggregateInputObjectSchema } from './ChatsMinOrderByAggregateInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  group_id: z.uuid().optional(),
  message: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  name: SortOrderSchema.optional(),
  file: z.union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)]).optional(),
  created_at: SortOrderSchema.optional(),
  _count: z.lazy(() => ChatsCountOrderByAggregateInputObjectSchema).optional(),
  _max: z.lazy(() => ChatsMaxOrderByAggregateInputObjectSchema).optional(),
  _min: z.lazy(() => ChatsMinOrderByAggregateInputObjectSchema).optional()
}).strict();
export const ChatsOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChatsOrderByWithAggregationInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsOrderByWithAggregationInput>;
export const ChatsOrderByWithAggregationInputObjectZodSchema = makeSchema();
