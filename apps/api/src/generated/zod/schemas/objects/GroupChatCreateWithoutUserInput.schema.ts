import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsCreateNestedManyWithoutGroupInputObjectSchema as ChatsCreateNestedManyWithoutGroupInputObjectSchema } from './ChatsCreateNestedManyWithoutGroupInput.schema';
import { GroupUsersCreateNestedManyWithoutGroupInputObjectSchema as GroupUsersCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUsersCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional(),
  Chats: z.lazy(() => ChatsCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUsersCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateWithoutUserInput>;
export const GroupChatCreateWithoutUserInputObjectZodSchema = makeSchema();
