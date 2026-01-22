import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  user_id: z.literal(true).optional(),
  title: z.literal(true).optional(),
  passcode: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GroupChatCountAggregateInputObjectSchema: z.ZodType<Prisma.GroupChatCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCountAggregateInputType>;
export const GroupChatCountAggregateInputObjectZodSchema = makeSchema();
