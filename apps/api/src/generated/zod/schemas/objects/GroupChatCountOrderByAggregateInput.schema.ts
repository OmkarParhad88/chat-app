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
export const GroupChatCountOrderByAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatCountOrderByAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatCountOrderByAggregateInput>;
export const GroupChatCountOrderByAggregateInputObjectZodSchema = makeSchema();
