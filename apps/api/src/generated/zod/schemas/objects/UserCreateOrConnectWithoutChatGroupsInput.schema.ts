import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserCreateWithoutChatGroupsInputObjectSchema as UserCreateWithoutChatGroupsInputObjectSchema } from './UserCreateWithoutChatGroupsInput.schema';
import { UserUncheckedCreateWithoutChatGroupsInputObjectSchema as UserUncheckedCreateWithoutChatGroupsInputObjectSchema } from './UserUncheckedCreateWithoutChatGroupsInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => UserWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => UserCreateWithoutChatGroupsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutChatGroupsInputObjectSchema),
      ]),
    })
    .strict();
export const UserCreateOrConnectWithoutChatGroupsInputObjectSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutChatGroupsInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserCreateOrConnectWithoutChatGroupsInput>;
export const UserCreateOrConnectWithoutChatGroupsInputObjectZodSchema =
  makeSchema();
