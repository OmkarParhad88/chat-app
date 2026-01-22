import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.literal(true).optional()
}).strict();
export const GroupChatSumAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatSumAggregateInputType>;
export const GroupChatSumAggregateInputObjectZodSchema = makeSchema();
