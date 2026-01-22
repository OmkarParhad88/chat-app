import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GroupUsersAvgAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersAvgAggregateInputType>;
export const GroupUsersAvgAggregateInputObjectZodSchema = makeSchema();
