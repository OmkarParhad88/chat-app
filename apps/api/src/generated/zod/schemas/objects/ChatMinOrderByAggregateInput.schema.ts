import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      group_id: z.uuid().optional(),
      message: SortOrderSchema.optional(),
      name: SortOrderSchema.optional(),
      file: SortOrderSchema.optional(),
      created_at: SortOrderSchema.optional(),
    })
    .strict();
export const ChatMinOrderByAggregateInputObjectSchema: z.ZodType<Prisma.ChatMinOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatMinOrderByAggregateInput>;
export const ChatMinOrderByAggregateInputObjectZodSchema = makeSchema();
