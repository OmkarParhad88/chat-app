import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateNestedOneWithoutChatGroupsInputObjectSchema as UserCreateNestedOneWithoutChatGroupsInputObjectSchema } from './UserCreateNestedOneWithoutChatGroupsInput.schema';
import { GroupUsersCreateNestedManyWithoutGroupInputObjectSchema as GroupUsersCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUsersCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutChatGroupsInputObjectSchema),
  GroupUsers: z.lazy(() => GroupUsersCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatCreateWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatCreateWithoutChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateWithoutChatsInput>;
export const GroupChatCreateWithoutChatsInputObjectZodSchema = makeSchema();
