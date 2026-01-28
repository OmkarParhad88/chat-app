import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      message: z.string().optional().nullable(),
      name: z.string(),
      file: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
    })
    .strict();
export const ChatCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatCreateWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatCreateWithoutGroupInput>;
export const ChatCreateWithoutGroupInputObjectZodSchema = makeSchema();
