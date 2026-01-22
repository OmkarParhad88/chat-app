import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ChatsUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ChatsUncheckedCreateNestedManyWithoutGroupInput.schema';
import { GroupUsersUncheckedCreateNestedManyWithoutGroupInputObjectSchema as GroupUsersUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUsersUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  passcode: z.string(),
  created_at: z.coerce.date().optional(),
  Chats: z.lazy(() => ChatsUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUsersUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateWithoutUserInput>;
export const GroupChatUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
