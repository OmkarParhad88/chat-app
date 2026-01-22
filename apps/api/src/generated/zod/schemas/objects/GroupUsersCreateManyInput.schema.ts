import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.number().int().optional(),
  group_id: z.uuid(),
  name: z.string(),
  created_at: z.coerce.date().optional()
}).strict();
export const GroupUsersCreateManyInputObjectSchema: z.ZodType<Prisma.GroupUsersCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersCreateManyInput>;
export const GroupUsersCreateManyInputObjectZodSchema = makeSchema();
