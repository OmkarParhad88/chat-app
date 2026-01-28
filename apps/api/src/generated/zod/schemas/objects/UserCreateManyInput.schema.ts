import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      name: z.string().max(191),
      email: z.email().max(191),
      provider: z.string().max(100),
      image: z.url().optional().nullable(),
      oauth_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();
export const UserCreateManyInputObjectSchema: z.ZodType<Prisma.UserCreateManyInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateManyInput>;
export const UserCreateManyInputObjectZodSchema = makeSchema();
