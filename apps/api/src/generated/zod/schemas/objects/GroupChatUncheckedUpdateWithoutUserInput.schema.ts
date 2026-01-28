import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { DateTimeFieldUpdateOperationsInputObjectSchema as DateTimeFieldUpdateOperationsInputObjectSchema } from './DateTimeFieldUpdateOperationsInput.schema';
import { ChatUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as ChatUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './ChatUncheckedUpdateManyWithoutGroupNestedInput.schema';
import { GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema as GroupUserUncheckedUpdateManyWithoutGroupNestedInputObjectSchema } from './GroupUserUncheckedUpdateManyWithoutGroupNestedInput.schema';

const makeSchema = () =>
  z
    .object({
      id: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      title: z
        .union([
          z.string(),
          z.lazy(() => StringFieldUpdateOperationsInputObjectSchema),
        ])
        .optional(),
      passcode: z
        .union([
          z.string(),
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
export const GroupChatUncheckedUpdateWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedUpdateWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedUpdateWithoutUserInput>;
export const GroupChatUncheckedUpdateWithoutUserInputObjectZodSchema =
  makeSchema();
