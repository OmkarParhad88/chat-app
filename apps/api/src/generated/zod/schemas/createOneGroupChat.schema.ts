import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './objects/GroupChatInclude.schema';
import { GroupChatCreateInputObjectSchema as GroupChatCreateInputObjectSchema } from './objects/GroupChatCreateInput.schema';
import { GroupChatUncheckedCreateInputObjectSchema as GroupChatUncheckedCreateInputObjectSchema } from './objects/GroupChatUncheckedCreateInput.schema';

export const GroupChatCreateOneSchema: z.ZodType<Prisma.GroupChatCreateArgs> = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    include: GroupChatIncludeObjectSchema.optional(),
    data: z.union([
      GroupChatCreateInputObjectSchema,
      GroupChatUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict() as unknown as z.ZodType<Prisma.GroupChatCreateArgs>;

export const GroupChatCreateOneZodSchema = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    include: GroupChatIncludeObjectSchema.optional(),
    data: z.union([
      GroupChatCreateInputObjectSchema,
      GroupChatUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
