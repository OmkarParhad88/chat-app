import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatCreateWithoutGroupUsersInputObjectSchema as GroupChatCreateWithoutGroupUsersInputObjectSchema } from './GroupChatCreateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedCreateWithoutGroupUsersInput.schema';
import { GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema as GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema } from './GroupChatCreateOrConnectWithoutGroupUsersInput.schema';
import { GroupChatUpsertWithoutGroupUsersInputObjectSchema as GroupChatUpsertWithoutGroupUsersInputObjectSchema } from './GroupChatUpsertWithoutGroupUsersInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './GroupChatWhereUniqueInput.schema';
import { GroupChatUpdateToOneWithWhereWithoutGroupUsersInputObjectSchema as GroupChatUpdateToOneWithWhereWithoutGroupUsersInputObjectSchema } from './GroupChatUpdateToOneWithWhereWithoutGroupUsersInput.schema';
import { GroupChatUpdateWithoutGroupUsersInputObjectSchema as GroupChatUpdateWithoutGroupUsersInputObjectSchema } from './GroupChatUpdateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedUpdateWithoutGroupUsersInput.schema';

const makeSchema = () =>
  z
    .object({
      create: z
        .union([
          z.lazy(() => GroupChatCreateWithoutGroupUsersInputObjectSchema),
          z.lazy(
            () => GroupChatUncheckedCreateWithoutGroupUsersInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(() => GroupChatCreateOrConnectWithoutGroupUsersInputObjectSchema)
        .optional(),
      upsert: z
        .lazy(() => GroupChatUpsertWithoutGroupUsersInputObjectSchema)
        .optional(),
      connect: z.lazy(() => GroupChatWhereUniqueInputObjectSchema).optional(),
      update: z
        .union([
          z.lazy(
            () =>
              GroupChatUpdateToOneWithWhereWithoutGroupUsersInputObjectSchema,
          ),
          z.lazy(() => GroupChatUpdateWithoutGroupUsersInputObjectSchema),
          z.lazy(
            () => GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();
export const GroupChatUpdateOneRequiredWithoutGroupUsersNestedInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateOneRequiredWithoutGroupUsersNestedInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateOneRequiredWithoutGroupUsersNestedInput>;
export const GroupChatUpdateOneRequiredWithoutGroupUsersNestedInputObjectZodSchema =
  makeSchema();
