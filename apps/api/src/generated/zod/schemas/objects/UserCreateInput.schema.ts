import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateNestedManyWithoutUserInputObjectSchema as GroupChatCreateNestedManyWithoutUserInputObjectSchema } from './GroupChatCreateNestedManyWithoutUserInput.schema';

const makeSchema = () =>
  z
    .object({
      name: z.string().max(191),
      email: z.email().max(191),
      provider: z.string().max(100),
      image: z.url().optional().nullable(),
      oauth_id: z.string(),
      created_at: z.coerce.date().optional(),
      chatGroups: z
        .lazy(() => GroupChatCreateNestedManyWithoutUserInputObjectSchema)
        .optional(),
    })
    .strict();
export const UserCreateInputObjectSchema: z.ZodType<Prisma.UserCreateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateInput>;
export const UserCreateInputObjectZodSchema = makeSchema();
