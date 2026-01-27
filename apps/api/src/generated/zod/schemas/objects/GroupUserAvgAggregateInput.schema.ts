import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GroupUserAvgAggregateInputObjectSchema: z.ZodType<Prisma.GroupUserAvgAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserAvgAggregateInputType>;
export const GroupUserAvgAggregateInputObjectZodSchema = makeSchema();
