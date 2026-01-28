import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
    })
    .strict();
export const GroupUserWhereUniqueInputObjectSchema: z.ZodType<Prisma.GroupUserWhereUniqueInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserWhereUniqueInput>;
export const GroupUserWhereUniqueInputObjectZodSchema = makeSchema();
