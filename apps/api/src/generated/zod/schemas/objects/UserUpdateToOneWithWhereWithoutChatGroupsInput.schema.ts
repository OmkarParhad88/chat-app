import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { UserWhereInputObjectSchema as UserWhereInputObjectSchema } from './UserWhereInput.schema';
import { UserUpdateWithoutChatGroupsInputObjectSchema as UserUpdateWithoutChatGroupsInputObjectSchema } from './UserUpdateWithoutChatGroupsInput.schema';
import { UserUncheckedUpdateWithoutChatGroupsInputObjectSchema as UserUncheckedUpdateWithoutChatGroupsInputObjectSchema } from './UserUncheckedUpdateWithoutChatGroupsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => UserWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => UserUpdateWithoutChatGroupsInputObjectSchema), z.lazy(() => UserUncheckedUpdateWithoutChatGroupsInputObjectSchema)])
}).strict();
export const UserUpdateToOneWithWhereWithoutChatGroupsInputObjectSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChatGroupsInput> = makeSchema() as unknown as z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutChatGroupsInput>;
export const UserUpdateToOneWithWhereWithoutChatGroupsInputObjectZodSchema = makeSchema();
