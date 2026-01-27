import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUserCreateManyGroupInputObjectSchema as GroupUserCreateManyGroupInputObjectSchema } from './GroupUserCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GroupUserCreateManyGroupInputObjectSchema), z.lazy(() => GroupUserCreateManyGroupInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GroupUserCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.GroupUserCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserCreateManyGroupInputEnvelope>;
export const GroupUserCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
