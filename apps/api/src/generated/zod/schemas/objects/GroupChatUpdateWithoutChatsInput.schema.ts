import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema as UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema } from './UserUpdateOneRequiredWithoutChatGroupsNestedInput.schema';
import { GroupUserUpdateManyWithoutGroupNestedInputObjectSchema as GroupUserUpdateManyWithoutGroupNestedInputObjectSchema } from './GroupUserUpdateManyWithoutGroupNestedInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.uuid(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  title: z.union([z.string().max(191), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passcode: z.union([z.string().max(20), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  user: z.lazy(() => UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema).optional(),
  GroupUsers: z.lazy(() => GroupUserUpdateManyWithoutGroupNestedInputObjectSchema).optional()
}).strict();
export const GroupChatUpdateWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateWithoutChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateWithoutChatsInput>;
export const GroupChatUpdateWithoutChatsInputObjectZodSchema = makeSchema();
