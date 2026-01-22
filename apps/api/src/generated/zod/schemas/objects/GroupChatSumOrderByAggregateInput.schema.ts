import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  user_id: SortOrderSchema.optional()
}).strict();
export const GroupChatSumOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatSumOrderByAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatSumOrderByAggregateInput>;
export const GroupChatSumOrderByAggregateInputObjectZodSchema = makeSchema();
