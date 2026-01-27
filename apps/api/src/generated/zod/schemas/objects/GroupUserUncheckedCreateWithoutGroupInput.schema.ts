import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupUserUncheckedCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUserUncheckedCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserUncheckedCreateWithoutGroupInput>;
export const GroupUserUncheckedCreateWithoutGroupInputObjectZodSchema = makeSchema();
