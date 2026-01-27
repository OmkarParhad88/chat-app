import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutChatGroupsInputObjectSchema as UserCreateNestedOneWithoutChatGroupsInputObjectSchema } from './UserCreateNestedOneWithoutChatGroupsInput.schema';
import { ChatCreateNestedManyWithoutGroupInputObjectSchema as ChatCreateNestedManyWithoutGroupInputObjectSchema } from './ChatCreateNestedManyWithoutGroupInput.schema';
import { GroupUserCreateNestedManyWithoutGroupInputObjectSchema as GroupUserCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUserCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutChatGroupsInputObjectSchema),
  Chats: z.lazy(() => ChatCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatCreateInputObjectSchema: z.ZodType<Prisma.GroupChatCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateInput>;
export const GroupChatCreateInputObjectZodSchema = makeSchema();
