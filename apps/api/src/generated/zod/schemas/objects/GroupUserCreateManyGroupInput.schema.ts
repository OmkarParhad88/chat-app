import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();
export const GroupUserCreateManyGroupInputObjectSchema: z.ZodType<Prisma.GroupUserCreateManyGroupInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupUserCreateManyGroupInput>;
export const GroupUserCreateManyGroupInputObjectZodSchema = makeSchema();
