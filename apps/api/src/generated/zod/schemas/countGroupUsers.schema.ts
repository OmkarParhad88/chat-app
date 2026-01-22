import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersOrderByWithRelationInputObjectSchema as GroupUsersOrderByWithRelationInputObjectSchema } from './objects/GroupUsersOrderByWithRelationInput.schema';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './objects/GroupUsersWhereInput.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';
import { GroupUsersCountAggregateInputObjectSchema as GroupUsersCountAggregateInputObjectSchema } from './objects/GroupUsersCountAggregateInput.schema';

export const GroupUsersCountSchema: z.ZodType<Prisma.GroupUsersCountArgs> = z.object({ orderBy: z.union([GroupUsersOrderByWithRelationInputObjectSchema, GroupUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupUsersWhereInputObjectSchema.optional(), cursor: GroupUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupUsersCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersCountArgs>;

export const GroupUsersCountZodSchema = z.object({ orderBy: z.union([GroupUsersOrderByWithRelationInputObjectSchema, GroupUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupUsersWhereInputObjectSchema.optional(), cursor: GroupUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), GroupUsersCountAggregateInputObjectSchema ]).optional() }).strict();