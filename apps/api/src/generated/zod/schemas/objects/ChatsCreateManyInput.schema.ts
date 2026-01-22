import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.uuid().optional(),
  group_id: z.uuid(),
  message: z.string().optional().nullable(),
  name: z.string(),
  file: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ChatsCreateManyInputObjectSchema: z.ZodType<Prisma.ChatsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateManyInput>;
export const ChatsCreateManyInputObjectZodSchema = makeSchema();
