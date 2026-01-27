import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupUserCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserCreateWithoutGroupInput>;
export const GroupUserCreateWithoutGroupInputObjectZodSchema = makeSchema();
