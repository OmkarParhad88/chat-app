import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutChatGroupsInputObjectSchema as UserCreateNestedOneWithoutChatGroupsInputObjectSchema } from './UserCreateNestedOneWithoutChatGroupsInput.schema';
import { ChatsCreateNestedManyWithoutGroupInputObjectSchema as ChatsCreateNestedManyWithoutGroupInputObjectSchema } from './ChatsCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutChatGroupsInputObjectSchema),
  Chats: z.lazy(() => ChatsCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatCreateWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatCreateWithoutGroupUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateWithoutGroupUsersInput>;
export const GroupChatCreateWithoutGroupUsersInputObjectZodSchema = makeSchema();
