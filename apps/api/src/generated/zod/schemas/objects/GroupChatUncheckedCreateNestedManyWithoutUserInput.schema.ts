import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateWithoutUserInputObjectSchema as GroupChatCreateWithoutUserInputObjectSchema } from './GroupChatCreateWithoutUserInput.schema';
import { GroupChatUncheckedCreateWithoutUserInputObjectSchema as GroupChatUncheckedCreateWithoutUserInputObjectSchema } from './GroupChatUncheckedCreateWithoutUserInput.schema';
import { GroupChatCreateOrConnectWithoutUserInputObjectSchema as GroupChatCreateOrConnectWithoutUserInputObjectSchema } from './GroupChatCreateOrConnectWithoutUserInput.schema';
import { GroupChatCreateManyUserInputEnvelopeObjectSchema as GroupChatCreateManyUserInputEnvelopeObjectSchema } from './GroupChatCreateManyUserInputEnvelope.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupChatCreateWithoutUserInputObjectSchema), z.lazy(() => GroupChatCreateWithoutUserInputObjectSchema).array(), z.lazy(() => GroupChatUncheckedCreateWithoutUserInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutUserInputObjectSchema).array()]).optional(),
  connectOrCreate: z.union([z.lazy(() => GroupChatCreateOrConnectWithoutUserInputObjectSchema), z.lazy(() => GroupChatCreateOrConnectWithoutUserInputObjectSchema).array()]).optional(),
  createMany: z.lazy(() => GroupChatCreateManyUserInputEnvelopeObjectSchema).optional(),
  connect: z.union([z.lazy(() => GroupChatWhereUniqueInputObjectSchema), z.lazy(() => GroupChatWhereUniqueInputObjectSchema).array()]).optional()
}).strict();
export const GroupChatUncheckedCreateNestedManyWithoutUserInputObjectSchema: z.ZodType<Prisma.GroupChatUncheckedCreateNestedManyWithoutUserInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUncheckedCreateNestedManyWithoutUserInput>;
export const GroupChatUncheckedCreateNestedManyWithoutUserInputObjectZodSchema = makeSchema();
