import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ChatsUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ChatsUncheckedCreateNestedManyWithoutGroupInput.schema';
import { GroupUsersUncheckedCreateNestedManyWithoutGroupInputObjectSchema as GroupUsersUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUsersUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  user_id: z.number().int(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional(),
  Chats: z.lazy(() => ChatsUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUsersUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateInput>;
export const GroupChatUncheckedCreateInputObjectZodSchema = makeSchema();
