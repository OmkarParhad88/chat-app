import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  group_id: z.uuid().optional(),
  message: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  file: SortOrderSchema.optional(),
  created_at: SortOrderSchema.optional()
}).strict();
export const ChatsCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChatsCountOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCountOrderByAggregateInput>;
export const ChatsCountOrderByAggregateInputObjectZodSchema = makeSchema();
