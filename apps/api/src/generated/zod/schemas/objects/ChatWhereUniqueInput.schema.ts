import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
    })
    .strict();
export const ChatWhereUniqueInputObjectSchema: z.ZodType<Prisma.ChatWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatWhereUniqueInput>;
export const ChatWhereUniqueInputObjectZodSchema = makeSchema();
