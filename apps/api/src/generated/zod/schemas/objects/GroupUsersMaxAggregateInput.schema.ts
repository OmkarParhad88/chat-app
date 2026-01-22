import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional(),
  group_id: z.literal(true).optional(),
  name: z.literal(true).optional(),
  created_at: z.literal(true).optional()
}).strict();
export const GroupUsersMaxAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersMaxAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersMaxAggregateInputType>;
export const GroupUsersMaxAggregateInputObjectZodSchema = makeSchema();
