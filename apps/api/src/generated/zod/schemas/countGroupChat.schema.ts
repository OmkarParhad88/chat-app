import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatOrderByWithRelationInputObjectSchema as GroupChatOrderByWithRelationInputObjectSchema } from './objects/GroupChatOrderByWithRelationInput.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './objects/GroupChatWhereInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './objects/GroupChatWhereUniqueInput.schema';
import { GroupChatCountAggregateInputObjectSchema as GroupChatCountAggregateInputObjectSchema } from './objects/GroupChatCountAggregateInput.schema';

export const GroupChatCountSchema: z.ZodType<Prisma.GroupChatCountArgs> = z
  .object({
    orderBy: z
      .union([
        GroupChatOrderByWithRelationInputObjectSchema,
        GroupChatOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: GroupChatWhereInputObjectSchema.optional(),
    cursor: GroupChatWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), GroupChatCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.GroupChatCountArgs>;

export const GroupChatCountZodSchema = z
  .object({
    orderBy: z
      .union([
        GroupChatOrderByWithRelationInputObjectSchema,
        GroupChatOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: GroupChatWhereInputObjectSchema.optional(),
    cursor: GroupChatWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), GroupChatCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();
