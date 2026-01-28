import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';
import { GroupUserOrderByWithAggregationInputObjectSchema as GroupUserOrderByWithAggregationInputObjectSchema } from './objects/GroupUserOrderByWithAggregationInput.schema';
import { GroupUserScalarWhereWithAggregatesInputObjectSchema as GroupUserScalarWhereWithAggregatesInputObjectSchema } from './objects/GroupUserScalarWhereWithAggregatesInput.schema';
import { GroupUserScalarFieldEnumSchema } from './enums/GroupUserScalarFieldEnum.schema';
import { GroupUserCountAggregateInputObjectSchema as GroupUserCountAggregateInputObjectSchema } from './objects/GroupUserCountAggregateInput.schema';
import { GroupUserMinAggregateInputObjectSchema as GroupUserMinAggregateInputObjectSchema } from './objects/GroupUserMinAggregateInput.schema';
import { GroupUserMaxAggregateInputObjectSchema as GroupUserMaxAggregateInputObjectSchema } from './objects/GroupUserMaxAggregateInput.schema';
import { GroupUserAvgAggregateInputObjectSchema as GroupUserAvgAggregateInputObjectSchema } from './objects/GroupUserAvgAggregateInput.schema';
import { GroupUserSumAggregateInputObjectSchema as GroupUserSumAggregateInputObjectSchema } from './objects/GroupUserSumAggregateInput.schema';

export const GroupUserGroupBySchema: z.ZodType<Prisma.GroupUserGroupByArgs> = z
  .object({
    where: GroupUserWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        GroupUserOrderByWithAggregationInputObjectSchema,
        GroupUserOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: GroupUserScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(GroupUserScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), GroupUserCountAggregateInputObjectSchema])
      .optional(),
    _min: GroupUserMinAggregateInputObjectSchema.optional(),
    _max: GroupUserMaxAggregateInputObjectSchema.optional(),
    _avg: GroupUserAvgAggregateInputObjectSchema.optional(),
    _sum: GroupUserSumAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.GroupUserGroupByArgs>;

export const GroupUserGroupByZodSchema = z
  .object({
    where: GroupUserWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        GroupUserOrderByWithAggregationInputObjectSchema,
        GroupUserOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: GroupUserScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(GroupUserScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), GroupUserCountAggregateInputObjectSchema])
      .optional(),
    _min: GroupUserMinAggregateInputObjectSchema.optional(),
    _max: GroupUserMaxAggregateInputObjectSchema.optional(),
    _avg: GroupUserAvgAggregateInputObjectSchema.optional(),
    _sum: GroupUserSumAggregateInputObjectSchema.optional(),
  })
  .strict();
