import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserOrderByWithRelationInputObjectSchema as GroupUserOrderByWithRelationInputObjectSchema } from './objects/GroupUserOrderByWithRelationInput.schema';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './objects/GroupUserWhereUniqueInput.schema';
import { GroupUserCountAggregateInputObjectSchema as GroupUserCountAggregateInputObjectSchema } from './objects/GroupUserCountAggregateInput.schema';

export const GroupUserCountSchema: z.ZodType<Prisma.GroupUserCountArgs> = z.object({ orderBy: z.union([GroupUserOrderByWithRelationInputObjectSchema, GroupUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupUserWhereInputObjectSchema.optional(), cursor: GroupUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupUserCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupUserCountArgs>;

export const GroupUserCountZodSchema = z.object({ orderBy: z.union([GroupUserOrderByWithRelationInputObjectSchema, GroupUserOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupUserWhereInputObjectSchema.optional(), cursor: GroupUserWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupUserCountAggregateInputObjectSchema ]).optional() }).strict();