import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatUpdateManyMutationInputObjectSchema as GroupChatUpdateManyMutationInputObjectSchema } from './objects/GroupChatUpdateManyMutationInput.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './objects/GroupChatWhereInput.schema';

export const GroupChatUpdateManyAndReturnSchema: z.ZodType<Prisma.GroupChatUpdateManyAndReturnArgs> =
  z
    .object({
      select: GroupChatSelectObjectSchema.optional(),
      data: GroupChatUpdateManyMutationInputObjectSchema,
      where: GroupChatWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupChatUpdateManyAndReturnArgs>;

export const GroupChatUpdateManyAndReturnZodSchema = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    data: GroupChatUpdateManyMutationInputObjectSchema,
    where: GroupChatWhereInputObjectSchema.optional(),
  })
  .strict();
