import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GroupUsersSumAggregateInputObjectSchema: z.ZodType<Prisma.GroupUsersSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersSumAggregateInputType>;
export const GroupUsersSumAggregateInputObjectZodSchema = makeSchema();
