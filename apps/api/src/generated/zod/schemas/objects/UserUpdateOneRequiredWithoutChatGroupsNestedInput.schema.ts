import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserCreateWithoutChatGroupsInputObjectSchema as UserCreateWithoutChatGroupsInputObjectSchema } from './UserCreateWithoutChatGroupsInput.schema';
import { UserUncheckedCreateWithoutChatGroupsInputObjectSchema as UserUncheckedCreateWithoutChatGroupsInputObjectSchema } from './UserUncheckedCreateWithoutChatGroupsInput.schema';
import { UserCreateOrConnectWithoutChatGroupsInputObjectSchema as UserCreateOrConnectWithoutChatGroupsInputObjectSchema } from './UserCreateOrConnectWithoutChatGroupsInput.schema';
import { UserUpsertWithoutChatGroupsInputObjectSchema as UserUpsertWithoutChatGroupsInputObjectSchema } from './UserUpsertWithoutChatGroupsInput.schema';
import { UserWhereUniqueInputObjectSchema as UserWhereUniqueInputObjectSchema } from './UserWhereUniqueInput.schema';
import { UserUpdateToOneWithWhereWithoutChatGroupsInputObjectSchema as UserUpdateToOneWithWhereWithoutChatGroupsInputObjectSchema } from './UserUpdateToOneWithWhereWithoutChatGroupsInput.schema';
import { UserUpdateWithoutChatGroupsInputObjectSchema as UserUpdateWithoutChatGroupsInputObjectSchema } from './UserUpdateWithoutChatGroupsInput.schema';
import { UserUncheckedUpdateWithoutChatGroupsInputObjectSchema as UserUncheckedUpdateWithoutChatGroupsInputObjectSchema } from './UserUncheckedUpdateWithoutChatGroupsInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => UserCreateWithoutChatGroupsInputObjectSchema),
          z.lazy(() => UserUncheckedCreateWithoutChatGroupsInputObjectSchema),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => UserCreateOrConnectWithoutChatGroupsInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => UserUpsertWithoutChatGroupsInputObjectSchema)
        .optional(),
      connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () => UserUpdateToOneWithWhereWithoutChatGroupsInputObjectSchema,
          ),
          z.lazy(() => UserUpdateWithoutChatGroupsInputObjectSchema),
          z.lazy(() => UserUncheckedUpdateWithoutChatGroupsInputObjectSchema),
        ])
        .optional(),
    })
    .strict();
export const UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutChatGroupsNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.UserUpdateOneRequiredWithoutChatGroupsNestedInput>;
export const UserUpdateOneRequiredWithoutChatGroupsNestedInputObjectZodSchema =
  makeSchema();
