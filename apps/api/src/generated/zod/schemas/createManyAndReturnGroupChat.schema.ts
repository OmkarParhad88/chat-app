import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatCreateManyInputObjectSchema as GroupChatCreateManyInputObjectSchema } from './objects/GroupChatCreateManyInput.schema';

export const GroupChatCreateManyAndReturnSchema: z.ZodType<Prisma.GroupChatCreateManyAndReturnArgs> =
  z
    .object({
      select: GroupChatSelectObjectSchema.optional(),
      data: z.union([
        GroupChatCreateManyInputObjectSchema,
        z.array(GroupChatCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupChatCreateManyAndReturnArgs>;

export const GroupChatCreateManyAndReturnZodSchema = z
  .object({
    select: GroupChatSelectObjectSchema.optional(),
    data: z.union([
      GroupChatCreateManyInputObjectSchema,
      z.array(GroupChatCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
