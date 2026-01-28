import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { IntFieldUpdateOperationsInputObjectSchema as IntFieldUpdateOperationsInputObjectSchema } from './IntFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as ChatUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './ChatUncheckedUpdateManyWithoutGroupNestedInput.schema';
import { GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './GroupUserUncheckedUpdateManyWithoutGroupNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.uuid(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      user_id: z
        .union([
          z.number().int(),
          z.lazy(() => IntFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string().max(191),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passcode: z
        .union([
          z.string().max(20),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      created_at: z
        .union([
          z.coerce.date(),
          z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      Chats: z
        .lazy(() => ChatUncheckedUpdateManyWithoutGroupNestedInputObjectSchema)
        .optional(),
      GroupUsers: z
        .lazy(
          () => GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema,
        )
        .optional(),
    })
    .strict();
export const GroupChatUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedUpdateInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedUpdateInput>;
export const GroupChatUncheckedUpdateInputObjectZodSchema = makeSchema();
