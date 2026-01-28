import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ChatUncheckedCreateNestedManyWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.string().optional(),
      user_id: z.number().int(),
      title: z.string(),
      passcode: z.string(),
      created_at: z.coerce.date().optional(),
      Chats: z
        .lazy(() => ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema)
        .optional(),
    })
    .strict();
export const GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateWithoutGroupUsersInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateWithoutGroupUsersInput>;
export const GroupChatUncheckedCreateWithoutGroupUsersInputObjectZodSchema =
  makeSchema();
