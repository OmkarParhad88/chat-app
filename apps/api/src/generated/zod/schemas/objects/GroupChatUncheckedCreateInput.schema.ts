import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ChatUncheckedCreateNestedManyWithoutGroupInput.schema';
import { GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema as GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.uuid().optional(),
  user_id: z.number().int(),
  title: z.string().max(191),
  passcode: z.string().max(20),
  created_at: z.coerce.date().optional(),
  Chats: z.lazy(() => ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatUncheckedCreateInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateInput>;
export const GroupChatUncheckedCreateInputObjectZodSchema = makeSchema();
