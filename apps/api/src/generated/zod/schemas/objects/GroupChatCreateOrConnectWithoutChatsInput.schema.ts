import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatCreateWithoutChatsInputObjectSchema as GroupChatCreateWithoutChatsInputObjectSchema } from './GroupChatCreateWithoutChatsInput.schema';
import { GroupChatUncheckedCreateWithoutChatsInputObjectSchema as GroupChatUncheckedCreateWithoutChatsInputObjectSchema } from './GroupChatUncheckedCreateWithoutChatsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupChatCreateWithoutChatsInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutChatsInputObjectSchema)])
}).strict();
export const GroupChatCreateOrConnectWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatCreateOrConnectWithoutChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateOrConnectWithoutChatsInput>;
export const GroupChatCreateOrConnectWithoutChatsInputObjectZodSchema = makeSchema();
