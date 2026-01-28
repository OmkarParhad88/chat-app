import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatCreateManyGroupInputObjectSchema as ChatCreateManyGroupInputObjectSchema } from './ChatCreateManyGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      data: z.union([
        z.lazy(() => ChatCreateManyGroupInputObjectSchema),
        z.lazy(() => ChatCreateManyGroupInputObjectSchema).array(),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict();
export const ChatCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.ChatCreateManyGroupInputEnvelope> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatCreateManyGroupInputEnvelope>;
export const ChatCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
