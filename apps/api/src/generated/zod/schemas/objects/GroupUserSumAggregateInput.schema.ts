import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.literal(true).optional()
}).strict();
export const GroupUserSumAggregateInputObjectSchema: z.ZodType<Prisma.GroupUserSumAggregateInputType> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserSumAggregateInputType>;
export const GroupUserSumAggregateInputObjectZodSchema = makeSchema();
