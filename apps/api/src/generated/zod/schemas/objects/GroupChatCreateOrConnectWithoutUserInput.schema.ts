import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatCreateWithoutUserInputObjectSchema as GroupChatCreateWithoutUserInputObjectSchema } from './GroupChatCreateWithoutUserInput.schema';
import { GroupChatUncheckedCreateWithoutUserInputObjectSchema as GroupChatUncheckedCreateWithoutUserInputObjectSchema } from './GroupChatUncheckedCreateWithoutUserInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupChatCreateWithoutUserInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutUserInputObjectSchema)])
}).strict();
export const GroupChatCreateOrConnectWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatCreateOrConnectWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateOrConnectWithoutUserInput>;
export const GroupChatCreateOrConnectWithoutUserInputObjectZodSchema = makeSchema();
