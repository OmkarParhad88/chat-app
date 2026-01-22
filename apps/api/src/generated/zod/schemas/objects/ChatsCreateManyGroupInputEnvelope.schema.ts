import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsCreateManyGroupInputObjectSchema as ChatsCreateManyGroupInputObjectSchema } from './ChatsCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => ChatsCreateManyGroupInputObjectSchema), z.lazy(() => ChatsCreateManyGroupInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const ChatsCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.ChatsCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.ChatsCreateManyGroupInputEnvelope>;
export const ChatsCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
