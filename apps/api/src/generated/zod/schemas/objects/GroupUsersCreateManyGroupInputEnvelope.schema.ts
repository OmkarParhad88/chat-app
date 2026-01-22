import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupUsersCreateManyGroupInputObjectSchema as GroupUsersCreateManyGroupInputObjectSchema } from './GroupUsersCreateManyGroupInput.schema'

const makeSchema = () => z.object({
  data: z.union([z.lazy(() => GroupUsersCreateManyGroupInputObjectSchema), z.lazy(() => GroupUsersCreateManyGroupInputObjectSchema).array()]),
  skipDuplicates: z.boolean().optional()
}).strict();
export const GroupUsersCreateManyGroupInputEnvelopeObjectSchema: z.ZodType<Prisma.GroupUsersCreateManyGroupInputEnvelope> = makeSchema() as unknown as z.ZodType<Prisma.GroupUsersCreateManyGroupInputEnvelope>;
export const GroupUsersCreateManyGroupInputEnvelopeObjectZodSchema = makeSchema();
