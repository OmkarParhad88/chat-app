import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatUpdateWithoutUserInputObjectSchema as GroupChatUpdateWithoutUserInputObjectSchema } from './GroupChatUpdateWithoutUserInput.schema';
import { GroupChatUncheckedUpdateWithoutUserInputObjectSchema as GroupChatUncheckedUpdateWithoutUserInputObjectSchema } from './GroupChatUncheckedUpdateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => GroupChatUpdateWithoutUserInputObjectSchema), z.lazy(() => GroupChatUncheckedUpdateWithoutUserInputObjectSchema)])
}).strict();
export const GroupChatUpdateWithWhereUniqueWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateWithWhereUniqueWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateWithWhereUniqueWithoutUserInput>;
export const GroupChatUpdateWithWhereUniqueWithoutUserInputObjectZodSchema = makeSchema();
