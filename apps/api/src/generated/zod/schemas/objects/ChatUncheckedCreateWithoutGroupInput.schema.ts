import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      message: z.string().optional().nullable(),
      name: z.string(),
      file: z.string().optional().nullable(),
      created_at: z.coerce.date().optional(),
    })
    .strict();
export const ChatUncheckedCreateWithoutGroupInputObjectSchema: z.ZodType<Prisma.ChatUncheckedCreateWithoutGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatUncheckedCreateWithoutGroupInput>;
export const ChatUncheckedCreateWithoutGroupInputObjectZodSchema = makeSchema();
