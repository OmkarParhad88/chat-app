import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateManyUserInputObjectSchema as GroupChatCreateManyUserInputObjectSchema } from './GroupChatCreateManyUserInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GroupChatCreateManyUserInputObjectSchema), z.lazy(() => GroupChatCreateManyUserInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GroupChatCreateManyUserInputEnvelopeObjectSchema: z.ZodType<Prisma.GroupChatCreateManyUserInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateManyUserInputEnvelope>;
export const GroupChatCreateManyUserInputEnvelopeObjectZodSchema = makeSchema();
