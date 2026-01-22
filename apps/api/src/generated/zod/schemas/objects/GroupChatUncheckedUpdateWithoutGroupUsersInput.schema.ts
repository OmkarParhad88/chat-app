import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatsUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as ChatsUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './ChatsUncheckedUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passcode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  Chats: z.lazy(() => ChatsUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedUpdateWithoutGroupUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedUpdateWithoutGroupUsersInput>;
export const GroupChatUncheckedUpdateWithoutGroupUsersInputObjectZodSchema = makeSchema();
