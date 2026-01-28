import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';

const makeSchema = () =>
  z
    .object({
      _count: SortOrderSchema.optional(),
    })
    .strict();
export const ChatOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ChatOrderByRelationAggregateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatOrderByRelationAggregateInput>;
export const ChatOrderByRelationAggregateInputObjectZodSchema = makeSchema();
