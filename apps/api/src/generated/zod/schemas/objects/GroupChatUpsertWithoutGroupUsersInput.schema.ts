import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatUpdateWithoutGroupUsersInputObjectSchema as GroupChatUpdateWithoutGroupUsersInputObjectSchema } from './GroupChatUpdateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedUpdateWithoutGroupUsersInput.schema';
import { GroupChatCreateWithoutGroupUsersInputObjectSchema as GroupChatCreateWithoutGroupUsersInputObjectSchema } from './GroupChatCreateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedCreateWithoutGroupUsersInput.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => GroupChatUpdateWithoutGroupUsersInputObjectSchema), z.lazy(() => GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema)]),
  create: z.union([z.lazy(() => GroupChatCreateWithoutGroupUsersInputObjectSchema), z.lazy(() => GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema)]),
  where: z.lazy(() => GroupChatWhereInputObjectSchema).optional()
}).strict();
export const GroupChatUpsertWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatUpsertWithoutGroupUsersInput> = makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpsertWithoutGroupUsersInput>;
export const GroupChatUpsertWithoutGroupUsersInputObjectZodSchema = makeSchema();
