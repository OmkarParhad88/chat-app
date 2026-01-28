import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateWithoutChatsInputObjectSchema as GroupChatCreateWithoutChatsInputObjectSchema } from './GroupChatCreateWithoutChatsInput.schema';
import { GroupChatUncheckedCreateWithoutChatsInputObjectSchema as GroupChatUncheckedCreateWithoutChatsInputObjectSchema } from './GroupChatUncheckedCreateWithoutChatsInput.schema';
import { GroupChatCreateOrConnectWithoutChatsInputObjectSchema as GroupChatCreateOrConnectWithoutChatsInputObjectSchema } from './GroupChatCreateOrConnectWithoutChatsInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';

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
      connect: z.lazy(() => GroupChatWhereUniqueInputObjectSchema).optional(),
    })
    .strict();
export const GroupChatCreateNestedOneWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatCreateNestedOneWithoutChatsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateNestedOneWithoutChatsInput>;
export const GroupChatCreateNestedOneWithoutChatsInputObjectZodSchema =
  makeSchema();
