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
export const ChatUncheckedCreateInputObjectSchema: z.ZodType<Prisma.ChatUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatUncheckedCreateInput>;
export const ChatUncheckedCreateInputObjectZodSchema = makeSchema();
