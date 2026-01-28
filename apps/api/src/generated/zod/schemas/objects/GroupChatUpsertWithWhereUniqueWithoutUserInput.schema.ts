import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatUpdateWithoutUserInputObjectSchema as GroupChatUpdateWithoutUserInputObjectSchema } from './GroupChatUpdateWithoutUserInput.schema';
import { GroupChatUncheckedUpdateWithoutUserInputObjectSchema as GroupChatUncheckedUpdateWithoutUserInputObjectSchema } from './GroupChatUncheckedUpdateWithoutUserInput.schema';
import { GroupChatCreateWithoutUserInputObjectSchema as GroupChatCreateWithoutUserInputObjectSchema } from './GroupChatCreateWithoutUserInput.schema';
import { GroupChatUncheckedCreateWithoutUserInputObjectSchema as GroupChatUncheckedCreateWithoutUserInputObjectSchema } from './GroupChatUncheckedCreateWithoutUserInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => GroupChatUpdateWithoutUserInputObjectSchema),
        z.lazy(() => GroupChatUncheckedUpdateWithoutUserInputObjectSchema),
      ]),
      create: z.union([
        z.lazy(() => GroupChatCreateWithoutUserInputObjectSchema),
        z.lazy(() => GroupChatUncheckedCreateWithoutUserInputObjectSchema),
      ]),
    })
    .strict();
export const GroupChatUpsertWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUpsertWithWhereUniqueWithoutUserInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpsertWithWhereUniqueWithoutUserInput>;
export const GroupChatUpsertWithWhereUniqueWithoutUserInputObjectZodSchema =
  makeSchema();
