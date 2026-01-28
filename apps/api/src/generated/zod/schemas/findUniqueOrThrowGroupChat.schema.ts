import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './objects/GroupChatInclude.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './objects/GroupChatWhereUniqueInput.schema';

export const GroupChatFindUniqueOrThrowSchema: z.ZodType<Prisma.GroupChatFindUniqueOrThrowArgs> =
  z
    .object({
      select: GroupChatSelectObjectSchema.optional(),
      include: GroupChatIncludeObjectSchema.optional(),
      where: GroupChatWhereUniqueInputObjectSchema,
    })
    .strict() as unknown as z.ZodType<Prisma.GroupChatFindUniqueOrThrowArgs>;

export const GroupChatFindUniqueOrThrowZodSchema = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    include: GroupChatIncludeObjectSchema.optional(),
    where: GroupChatWhereUniqueInputObjectSchema,
  })
  .strict();
