import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';

const makeSchema = () =>
  z
    .object({
      id: z.number().int().optional(),
      name: z.string(),
      email: z.string(),
      provider: z.string(),
      image: z.string().optional().nullable(),
      oauth_id: z.string(),
      created_at: z.coerce.date().optional(),
    })
    .strict();
export const UserUncheckedCreateWithoutChatGroupsInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutChatGroupsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateWithoutChatGroupsInput>;
export const UserUncheckedCreateWithoutChatGroupsInputObjectZodSchema =
  makeSchema();
