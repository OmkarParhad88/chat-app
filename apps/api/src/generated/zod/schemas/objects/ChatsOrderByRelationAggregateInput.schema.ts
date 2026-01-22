import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  _count: SortOrderSchema.optional()
}).strict();
export const ChatsOrderByRelationAggregateInputObjectSchema: z.ZodType<Prisma.ChatsOrderByRelationAggregateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsOrderByRelationAggregateInput>;
export const ChatsOrderByRelationAggregateInputObjectZodSchema = makeSchema();
