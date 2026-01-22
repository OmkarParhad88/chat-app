import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  name: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupUsersUncheckedCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersUncheckedCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersUncheckedCreateWithoutGroupInput>;
export const GroupUsersUncheckedCreateWithoutGroupInputObjectZodSchema = makeSchema();
