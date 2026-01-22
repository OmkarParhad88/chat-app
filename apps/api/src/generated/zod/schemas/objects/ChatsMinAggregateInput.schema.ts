import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  group_id: z.literal(true).optional(),
  message: z.literal(true).optional(),
  name: z.literal(true).optional(),
  file: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const ChatsMinAggregateInputObjectSchema: z.ZodType<Prisma.ChatsMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.ChatsMinAggregateInputType>;
export const ChatsMinAggregateInputObjectZodSchema = makeSchema();
