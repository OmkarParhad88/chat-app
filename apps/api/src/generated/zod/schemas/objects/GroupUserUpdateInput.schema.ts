import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { GroupChatUpdateOneRequiredWithoutGroupUsersNestedInputObjectSchema as GroupChatUpdateOneRequiredWithoutGroupUsersNestedInputObjectSchema } from './GroupChatUpdateOneRequiredWithoutGroupUsersNestedInput.schema'

const makeSchema = () => z.object({
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  created_at: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  group: z.lazy(() => GroupChatUpdateOneRequiredWithoutGroupUsersNestedInputObjectSchema).optional()
}).strict();
export const GroupUserUpdateInputObjectSchema: z.ZodType<Prisma.GroupUserUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupUserUpdateInput>;
export const GroupUserUpdateInputObjectZodSchema = makeSchema();
