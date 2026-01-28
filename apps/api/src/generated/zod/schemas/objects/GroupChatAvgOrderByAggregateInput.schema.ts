import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      user_id: SortOrderSchema.optional(),
    })
    .strict();
export const GroupChatAvgOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatAvgOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatAvgOrderByAggregateInput>;
export const GroupChatAvgOrderByAggregateInputObjectZodSchema = makeSchema();
