import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserOrderByWithRelationInputObjectSchema as GroupUserOrderByWithRelationInputObjectSchema } from './objects/GroupUserOrderByWithRelationInput.schema';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './objects/GroupUserWhereUniqueInput.schema';
import { GroupUserCountAggregateInputObjectSchema as GroupUserCountAggregateInputObjectSchema } from './objects/GroupUserCountAggregateInput.schema';
import { GroupUserMinAggregateInputObjectSchema as GroupUserMinAggregateInputObjectSchema } from './objects/GroupUserMinAggregateInput.schema';
import { GroupUserMaxAggregateInputObjectSchema as GroupUserMaxAggregateInputObjectSchema } from './objects/GroupUserMaxAggregateInput.schema';
import { GroupUserAvgAggregateInputObjectSchema as GroupUserAvgAggregateInputObjectSchema } from './objects/GroupUserAvgAggregateInput.schema';
import { GroupUserSumAggregateInputObjectSchema as GroupUserSumAggregateInputObjectSchema } from './objects/GroupUserSumAggregateInput.schema';

export const GroupUserAggregateSchema: z.ZodType<Prisma.GroupUserAggregateArgs> =
  z
    .object({
      orderBy: z
        .union([
          GroupUserOrderByWithRelationInputObjectSchema,
          GroupUserOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: GroupUserWhereInputObjectSchema.optional(),
      cursor: GroupUserWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      _count: z
        .union([z.literal(true), GroupUserCountAggregateInputObjectSchema])
        .optional(),
      _min: GroupUserMinAggregateInputObjectSchema.optional(),
      _max: GroupUserMaxAggregateInputObjectSchema.optional(),
      _avg: GroupUserAvgAggregateInputObjectSchema.optional(),
      _sum: GroupUserSumAggregateInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserAggregateArgs>;

export const GroupUserAggregateZodSchema = z
  .object({
    orderBy: z
      .union([
        GroupUserOrderByWithRelationInputObjectSchema,
        GroupUserOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: GroupUserWhereInputObjectSchema.optional(),
    cursor: GroupUserWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    _count: z
      .union([z.literal(true), GroupUserCountAggregateInputObjectSchema])
      .optional(),
    _min: GroupUserMinAggregateInputObjectSchema.optional(),
    _max: GroupUserMaxAggregateInputObjectSchema.optional(),
    _avg: GroupUserAvgAggregateInputObjectSchema.optional(),
    _sum: GroupUserSumAggregateInputObjectSchema.optional(),
  })
  .strict();
