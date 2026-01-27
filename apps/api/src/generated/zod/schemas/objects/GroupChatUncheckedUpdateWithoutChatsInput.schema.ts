import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './GroupUserUncheckedUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  user_id: z.union([z.number().int(), z.lazy(() => IntFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passcode: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  GroupUsers: z.lazy(() => GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const GroupChatUncheckedUpdateWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedUpdateWithoutChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedUpdateWithoutChatsInput>;
export const GroupChatUncheckedUpdateWithoutChatsInputObjectZodSchema = makeSchema();
