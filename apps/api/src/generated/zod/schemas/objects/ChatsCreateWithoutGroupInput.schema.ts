import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.uuid().optional(),
  message: z.string().optional().nullable(),
  name: z.string(),
  file: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ChatsCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatsCreateWithoutGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateWithoutGroupInput>;
export const ChatsCreateWithoutGroupInputObjectZodSchema = makeSchema();
