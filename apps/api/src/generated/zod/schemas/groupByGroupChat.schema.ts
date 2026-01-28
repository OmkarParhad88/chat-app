import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './objects/GroupChatWhereInput.schema';
import { GroupChatOrderByWithAggregationInputObjectSchema as GroupChatOrderByWithAggregationInputObjectSchema } from './objects/GroupChatOrderByWithAggregationInput.schema';
import { GroupChatScalarWhereWithAggregatesInputObjectSchema as GroupChatScalarWhereWithAggregatesInputObjectSchema } from './objects/GroupChatScalarWhereWithAggregatesInput.schema';
import { GroupChatScalarFieldEnumSchema } from './enums/GroupChatScalarFieldEnum.schema';
import { GroupChatCountAggregateInputObjectSchema as GroupChatCountAggregateInputObjectSchema } from './objects/GroupChatCountAggregateInput.schema';
import { GroupChatMinAggregateInputObjectSchema as GroupChatMinAggregateInputObjectSchema } from './objects/GroupChatMinAggregateInput.schema';
import { GroupChatMaxAggregateInputObjectSchema as GroupChatMaxAggregateInputObjectSchema } from './objects/GroupChatMaxAggregateInput.schema';
import { GroupChatAvgAggregateInputObjectSchema as GroupChatAvgAggregateInputObjectSchema } from './objects/GroupChatAvgAggregateInput.schema';
import { GroupChatSumAggregateInputObjectSchema as GroupChatSumAggregateInputObjectSchema } from './objects/GroupChatSumAggregateInput.schema';

export const GroupChatGroupBySchema: z.ZodType<Prisma.GroupChatGroupByArgs> = z
  .object({
    where: GroupChatWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        GroupChatOrderByWithAggregationInputObjectSchema,
        GroupChatOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: GroupChatScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(GroupChatScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), GroupChatCountAggregateInputObjectSchema])
      .optional(),
    _min: GroupChatMinAggregateInputObjectSchema.optional(),
    _max: GroupChatMaxAggregateInputObjectSchema.optional(),
    _avg: GroupChatAvgAggregateInputObjectSchema.optional(),
    _sum: GroupChatSumAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.GroupChatGroupByArgs>;

export const GroupChatGroupByZodSchema = z
  .object({
    where: GroupChatWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        GroupChatOrderByWithAggregationInputObjectSchema,
        GroupChatOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: GroupChatScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(GroupChatScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), GroupChatCountAggregateInputObjectSchema])
      .optional(),
    _min: GroupChatMinAggregateInputObjectSchema.optional(),
    _max: GroupChatMaxAggregateInputObjectSchema.optional(),
    _avg: GroupChatAvgAggregateInputObjectSchema.optional(),
    _sum: GroupChatSumAggregateInputObjectSchema.optional(),
  })
  .strict();
