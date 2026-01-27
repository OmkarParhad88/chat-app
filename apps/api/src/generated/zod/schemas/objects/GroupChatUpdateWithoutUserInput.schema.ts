import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatUpdateManyWithoutGroupNestedInputObjectSchema as ChatUpdateManyWithoutGroupNestedInputObjectSchema } from './ChatUpdateManyWithoutGroupNestedInput.schema';
import { GroupUserUpdateManyWithoutGroupNestedInputObjectSchema as GroupUserUpdateManyWithoutGroupNestedInputObjectSchema } from './GroupUserUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string().max(191), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passcode: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Chats: z.lazy(() => ChatUpdateManyWithoutGroupNestedInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const GroupChatUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateWithoutUserInput>;
export const GroupChatUpdateWithoutUserInputObjectZodSchema = makeSchema();
