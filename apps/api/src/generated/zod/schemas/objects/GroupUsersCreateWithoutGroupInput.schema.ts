import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  name: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupUsersCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.GroupUsersCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersCreateWithoutGroupInput>;
export const GroupUsersCreateWithoutGroupInputObjectZodSchema = makeSchema();
