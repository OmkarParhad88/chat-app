import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatCreateNestedManyWithoutGroupInputObjectSchema as ChatCreateNestedManyWithoutGroupInputObjectSchema } from './ChatCreateNestedManyWithoutGroupInput.schema';
import { GroupUserCreateNestedManyWithoutGroupInputObjectSchema as GroupUserCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUserCreateNestedManyWithoutGroupInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z.uuid().optional(),
      title: z.string().max(191),
      passcode: z.string().max(20),
      created_at: z.coerce.date().optional(),
      Chats: z
        .lazy(() => ChatCreateNestedManyWithoutGroupInputObjectSchema)
        .optional(),
      GroupUsers: z
        .lazy(() => GroupUserCreateNestedManyWithoutGroupInputObjectSchema)
        .optional(),
    })
    .strict();
export const GroupChatCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatCreateWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateWithoutUserInput>;
export const GroupChatCreateWithoutUserInputObjectZodSchema = makeSchema();
