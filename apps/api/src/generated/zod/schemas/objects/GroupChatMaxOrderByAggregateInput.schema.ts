import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      user_id: SortOrderSchema.optional(),
      title: SortOrderSchema.optional(),
      passcode: SortOrderSchema.optional(),
      created_at: SortOrderSchema.optional(),
    })
    .strict();
export const GroupChatMaxOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatMaxOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatMaxOrderByAggregateInput>;
export const GroupChatMaxOrderByAggregateInputObjectZodSchema = makeSchema();
