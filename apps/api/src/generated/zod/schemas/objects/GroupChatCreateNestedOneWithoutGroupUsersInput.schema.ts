import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateWithoutGroupUsersInputObjectSchema as GroupChatCreateWithoutGroupUsersInputObjectSchema } from './GroupChatCreateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedCreateWithoutGroupUsersInput.schema';
import { GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema as GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema } from './GroupChatCreateOrConnectWithoutGroupUsersInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => GroupChatCreateWithoutGroupUsersInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema).optional(),
  connect: z.lazy(() => GroupChatWhereUniqueInputObjectSchema).optional()
}).strict();
export const GroupChatCreateNestedOneWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatCreateNestedOneWithoutGroupUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatCreateNestedOneWithoutGroupUsersInput>;
export const GroupChatCreateNestedOneWithoutGroupUsersInputObjectZodSchema = makeSchema();
