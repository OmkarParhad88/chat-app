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
export const ChatCreateManyInputObjectSchema: z.ZodType<Prisma.ChatCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatCreateManyInput>;
export const ChatCreateManyInputObjectZodSchema = makeSchema();
