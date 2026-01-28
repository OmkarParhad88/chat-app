import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { SortOrderInputObjectSchema as SortOrderInputObjectSchema } from './SortOrderInput.schema';
import { ChatCountOrderByAggregateInputObjectSchema as ChatCountOrderByAggregateInputObjectSchema } from './ChatCountOrderByAggregateInput.schema';
import { ChatMaxOrderByAggregateInputObjectSchema as ChatMaxOrderByAggregateInputObjectSchema } from './ChatMaxOrderByAggregateInput.schema';
import { ChatMinOrderByAggregateInputObjectSchema as ChatMinOrderByAggregateInputObjectSchema } from './ChatMinOrderByAggregateInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      group_id: z.uuid().optional(),
      message: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      name: SortOrderSchema.optional(),
      file: z
        .union([SortOrderSchema, z.lazy(() => SortOrderInputObjectSchema)])
        .optional(),
      created_at: SortOrderSchema.optional(),
      _count: z
        .lazy(() => ChatCountOrderByAggregateInputObjectSchema)
        .optional(),
      _max: z.lazy(() => ChatMaxOrderByAggregateInputObjectSchema).optional(),
      _min: z.lazy(() => ChatMinOrderByAggregateInputObjectSchema).optional(),
    })
    .strict();
export const ChatOrderByWithAggregationInputObjectSchema: z.ZodType<Prisma.ChatOrderByWithAggregationInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatOrderByWithAggregationInput>;
export const ChatOrderByWithAggregationInputObjectZodSchema = makeSchema();
