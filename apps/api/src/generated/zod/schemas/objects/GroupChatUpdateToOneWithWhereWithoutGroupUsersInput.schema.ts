import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema';
import { GroupChatUpdateWithoutGroupUsersInputObjectSchema as GroupChatUpdateWithoutGroupUsersInputObjectSchema } from './GroupChatUpdateWithoutGroupUsersInput.schema';
import { GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema as GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema } from './GroupChatUncheckedUpdateWithoutGroupUsersInput.schema';

const makeSchema = () =>
  z
    .object({
      where: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
      data: z.union([
        z.lazy(() => GroupChatUpdateWithoutGroupUsersInputObjectSchema),
        z.lazy(
          () => GroupChatUncheckedUpdateWithoutGroupUsersInputObjectSchema,
        ),
      ]),
    })
    .strict();
export const GroupChatUpdateToOneWithWhereWithoutGroupUsersInputObjectSchema: z.ZodType<Prisma.GroupChatUpdateToOneWithWhereWithoutGroupUsersInput> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatUpdateToOneWithWhereWithoutGroupUsersInput>;
export const GroupChatUpdateToOneWithWhereWithoutGroupUsersInputObjectZodSchema =
  makeSchema();
