import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  group_id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  created_at: z.literal(true).optional(),
  _all: z.literal(true).optional()
}).strict();
export const GroupUsersCountAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersCountAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersCountAggregateInputType>;
export const GroupUsersCountAggregateInputObjectZodSchema = makeSchema();
