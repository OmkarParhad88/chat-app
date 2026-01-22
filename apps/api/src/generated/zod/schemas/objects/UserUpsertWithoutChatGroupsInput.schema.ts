import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserUpdateWithoutChatGroupsInputObjectSchema as UserUpdateWithoutChatGroupsInputObjectSchema } from './UserUpdateWithoutChatGroupsInput.schema';
import { UserUncheckedUpdateWithoutChatGroupsInputObjectSchema as UserUncheckedUpdateWithoutChatGroupsInputObjectSchema } from './UserUncheckedUpdateWithoutChatGroupsInput.schema';
import { UserCreateWithoutChatGroupsInputObjectSchema as UserCreateWithoutChatGroupsInputObjectSchema } from './UserCreateWithoutChatGroupsInput.schema';
import { UserUncheckedCreateWithoutChatGroupsInputObjectSchema as UserUncheckedCreateWithoutChatGroupsInputObjectSchema } from './UserUncheckedCreateWithoutChatGroupsInput.schema';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => UserUpdateWithoutChatGroupsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutChatGroupsInputObjectSchema)]),
  create: z.union([z.lazy(() => UserCreateWithoutChatGroupsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutChatGroupsInputObjectSchema)]),
  where: z.lazy(() => UserWhereInputObjectSchema).optional()
}).strict();
export const UserUpsertWithoutChatGroupsInputObjectSchema: z.ZodType<Prisma.UserUpsertWithoutChatGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpsertWithoutChatGroupsInput>;
export const UserUpsertWithoutChatGroupsInputObjectZodSchema = makeSchema();
