import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  group_id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const GroupUsersMinAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersMinAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersMinAggregateInputType>;
export const GroupUsersMinAggregateInputObjectZodSchema = makeSchema();
