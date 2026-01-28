import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema';
import { GroupChatUpdateWithoutChatsInputObjectSchema as GroupChatUpdateWithoutChatsInputObjectSchema } from './GroupChatUpdateWithoutChatsInput.schema';
import { GroupChatUncheckedUpdateWithoutChatsInputObjectSchema as GroupChatUncheckedUpdateWithoutChatsInputObjectSchema } from './GroupChatUncheckedUpdateWithoutChatsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => GroupChatUpdateWithoutChatsInputObjectSchema),
        z.lazy(() => GroupChatUncheckedUpdateWithoutChatsInputObjectSchema),
      ]),
    })
    .strict();
export const GroupChatUpdateToOneWithWhereWithoutChatsInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateToOneWithWhereWithoutChatsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateToOneWithWhereWithoutChatsInput>;
export const GroupChatUpdateToOneWithWhereWithoutChatsInputObjectZodSchema =
  makeSchema();
