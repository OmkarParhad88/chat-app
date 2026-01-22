import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutChatGroupsInputObjectSchema as UserCreateWithoutChatGroupsInputObjectSchema } from './UserCreateWithoutChatGroupsInput.schema';
import { UserUncheckedCreateWithoutChatGroupsInputObjectSchema as UserUncheckedCreateWithoutChatGroupsInputObjectSchema } from './UserUncheckedCreateWithoutChatGroupsInput.schema';
import { UserCreateOrConnectWithoutChatGroupsInputObjectSchema as UserCreateOrConnectWithoutChatGroupsInputObjectSchema } from './UserCreateOrConnectWithoutChatGroupsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => UserCreateWithoutChatGroupsInputObjectSchema), z.lazy(() => UserUncheckedCreateWithoutChatGroupsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutChatGroupsInputObjectSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional()
}).strict();
export const UserCreateNestedOneWithoutChatGroupsInputObjectSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutChatGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserCreateNestedOneWithoutChatGroupsInput>;
export const UserCreateNestedOneWithoutChatGroupsInputObjectZodSchema = makeSchema();
