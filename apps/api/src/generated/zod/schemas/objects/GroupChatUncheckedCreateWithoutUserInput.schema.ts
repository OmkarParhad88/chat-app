import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema as ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './ChatUncheckedCreateNestedManyWithoutGroupInput.schema';
import { GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema as GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema } from './GroupUserUncheckedCreateNestedManyWithoutGroupInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  title: z.string(),
  passcode: z.string(),
  created_at: z.coerce.date().optional(),
  Chats: z.lazy(() => ChatUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserUncheckedCreateNestedManyWithoutGroupInputObjectSchema).optional()
}).strict();
export const GroupChatUncheckedCreateWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateWithoutUserInput>;
export const GroupChatUncheckedCreateWithoutUserInputObjectZodSchema = makeSchema();
