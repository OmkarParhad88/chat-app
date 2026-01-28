import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './objects/GroupChatInclude.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './objects/GroupChatWhereUniqueInput.schema';

export const GroupChatDeleteOneSchema: z.ZodType<Prisma.GroupChatDeleteArgs> = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    include: GroupChatIncludeObjectSchema.optional(),
    where: GroupChatWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.GroupChatDeleteArgs>;

export const GroupChatDeleteOneZodSchema = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    include: GroupChatIncludeObjectSchema.optional(),
    where: GroupChatWhereUniqueInputObjectSchema,
  })
  .strict();
