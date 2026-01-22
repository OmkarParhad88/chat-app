import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatCreateWithoutGroupUsersInputObjectSchema as GroupChatCreateWithoutGroupUsersInputObjectSchema } from './GroupChatCreateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedCreateWithoutGroupUsersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => GroupChatWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => GroupChatCreateWithoutGroupUsersInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema)])
}).strict();
export const GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatCreateOrConnectWithoutGroupUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateOrConnectWithoutGroupUsersInput>;
export const GroupChatCreateOrConnectWithoutGroupUsersInputObjectZodSchema = makeSchema();
