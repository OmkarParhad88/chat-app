import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatUncheckedCreateNestedManyWithoutUserInputObjectSchema as GroupChatUncheckedCreateNestedManyWithoutUserInputObjectSchema } from './GroupChatUncheckedCreateNestedManyWithoutUserInput.schema';

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
      chatGroups: z
        .lazy(
          () => GroupChatUncheckedCreateNestedManyWithoutUserInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const UserUncheckedCreateInputObjectSchema: z.ZodType<Prisma.UserUncheckedCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUncheckedCreateInput>;
export const UserUncheckedCreateInputObjectZodSchema = makeSchema();
