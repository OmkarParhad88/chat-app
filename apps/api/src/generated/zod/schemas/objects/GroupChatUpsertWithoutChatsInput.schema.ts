import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatUpdateWithoutChatsInputObjectSchema as GroupChatUpdateWithoutChatsInputObjectSchema } from './GroupChatUpdateWithoutChatsInput.schema';
import { GroupChatUncheckedUpdateWithoutChatsInputObjectSchema as GroupChatUncheckedUpdateWithoutChatsInputObjectSchema } from './GroupChatUncheckedUpdateWithoutChatsInput.schema';
import { GroupChatCreateWithoutChatsInputObjectSchema as GroupChatCreateWithoutChatsInputObjectSchema } from './GroupChatCreateWithoutChatsInput.schema';
import { GroupChatUncheckedCreateWithoutChatsInputObjectSchema as GroupChatUncheckedCreateWithoutChatsInputObjectSchema } from './GroupChatUncheckedCreateWithoutChatsInput.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GroupChatUpdateWithoutChatsInputObjectSchema), z.lazy(() => GroupChatUncheckedUpdateWithoutChatsInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupChatCreateWithoutChatsInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutChatsInputObjectSchema)]),
  where: z.lazy(() => GroupChatWhereInputObjectSchema).optional()
}).strict();
export const GroupChatUpsertWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatUpsertWithoutChatsInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpsertWithoutChatsInput>;
export const GroupChatUpsertWithoutChatsInputObjectZodSchema = makeSchema();
