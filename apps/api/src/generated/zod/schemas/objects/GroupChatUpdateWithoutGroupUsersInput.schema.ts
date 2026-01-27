import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema as UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutChatGroupsNestedInput.schema';
import { ChatUpdateManyWithoutGroupNestedInputObjectSchema as ChatUpdateManyWithoutGroupNestedInputObjectSchema } from './ChatUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string().max(191), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passcode: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema).optional(),
  Chats: z.lazy(() => ChatUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const GroupChatUpdateWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateWithoutGroupUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateWithoutGroupUsersInput>;
export const GroupChatUpdateWithoutGroupUsersInputObjectZodSchema = makeSchema();
