import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateWithoutChatsInputObjectSchema as GroupChatCreateWithoutChatsInputObjectSchema } from './GroupChatCreateWithoutChatsInput.schema';
import { GroupChatUncheckedCreateWithoutChatsInputObjectSchema as GroupChatUncheckedCreateWithoutChatsInputObjectSchema } from './GroupChatUncheckedCreateWithoutChatsInput.schema';
import { GroupChatCreateOrConnectWithoutChatsInputObjectSchema as GroupChatCreateOrConnectWithoutChatsInputObjectSchema } from './GroupChatCreateOrConnectWithoutChatsInput.schema';
import { GroupChatUpsertWithoutChatsInputObjectSchema as GroupChatUpsertWithoutChatsInputObjectSchema } from './GroupChatUpsertWithoutChatsInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatUpdateToOneWithWhereWithoutChatsInputObjectSchema as GroupChatUpdateToOneWithWhereWithoutChatsInputObjectSchema } from './GroupChatUpdateToOneWithWhereWithoutChatsInput.schema';
import { GroupChatUpdateWithoutChatsInputObjectSchema as GroupChatUpdateWithoutChatsInputObjectSchema } from './GroupChatUpdateWithoutChatsInput.schema';
import { GroupChatUncheckedUpdateWithoutChatsInputObjectSchema as GroupChatUncheckedUpdateWithoutChatsInputObjectSchema } from './GroupChatUncheckedUpdateWithoutChatsInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => GroupChatCreateWithoutChatsInputObjectSchema),
          z.lazy(() => GroupChatUncheckedCreateWithoutChatsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GroupChatCreateOrConnectWithoutChatsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => GroupChatUpsertWithoutChatsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GroupChatWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => GroupChatUpdateToOneWithWhereWithoutChatsInputObjectSchema,
          ),
          z.lazy(() => GroupChatUpdateWithoutChatsInputObjectSchema),
          z.lazy(() => GroupChatUncheckedUpdateWithoutChatsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const GroupChatUpdateOneRequiredWithoutChatsNestedInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateOneRequiredWithoutChatsNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateOneRequiredWithoutChatsNestedInput>;
export const GroupChatUpdateOneRequiredWithoutChatsNestedInputObjectZodSchema =
  makeSchema();
