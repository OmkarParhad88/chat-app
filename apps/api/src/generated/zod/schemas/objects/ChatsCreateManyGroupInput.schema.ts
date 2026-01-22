import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';


const makeSchema = () => z.object({
  id: z.uuid().optional(),
  message: z.string().optional().nullable(),
  name: z.string(),
  file: z.string().optional().nullable(),
  created_at: z.coerce.date().optional()
}).strict();
export const ChatsCreateManyGroupInputObjectSchema: z.ZodType<Prisma.ChatsCreateManyGroupInput> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateManyGroupInput>;
export const ChatsCreateManyGroupInputObjectZodSchema = makeSchema();
