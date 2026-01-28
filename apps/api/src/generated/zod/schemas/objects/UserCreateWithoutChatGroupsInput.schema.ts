import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      name: z.string().max(191),
      email: z.email().max(191),
      provider: z.string().max(100),
      image: z.url().optional().nullable(),
      oauth_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();
export const UserCreateWithoutChatGroupsInputObjectSchema: z.ZodType<Prisma.UserCreateWithoutChatGroupsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateWithoutChatGroupsInput>;
export const UserCreateWithoutChatGroupsInputObjectZodSchema = makeSchema();
