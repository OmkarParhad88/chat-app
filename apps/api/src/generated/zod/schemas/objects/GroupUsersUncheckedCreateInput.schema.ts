import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  group_id: z.uuid(),
  name: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupUsersUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GroupUsersUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersUncheckedCreateInput>;
export const GroupUsersUncheckedCreateInputObjectZodSchema = makeSchema();
