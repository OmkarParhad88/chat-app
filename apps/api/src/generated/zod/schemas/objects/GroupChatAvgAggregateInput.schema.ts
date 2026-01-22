import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  user_id: z.literal(true).optional()
}).strict();
export const GroupChatAvgAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatAvgAggregateInputType>;
export const GroupChatAvgAggregateInputObjectZodSchema = makeSchema();
