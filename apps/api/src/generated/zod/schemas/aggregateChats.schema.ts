import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsOrderByWithRelationInputObjectSchema as ChatsOrderByWithRelationInputObjectSchema } from './objects/ChatsOrderByWithRelationInput.schema';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';
import { ChatsCountAggregateInputObjectSchema as ChatsCountAggregateInputObjectSchema } from './objects/ChatsCountAggregateInput.schema';
import { ChatsMinAggregateInputObjectSchema as ChatsMinAggregateInputObjectSchema } from './objects/ChatsMinAggregateInput.schema';
import { ChatsMaxAggregateInputObjectSchema as ChatsMaxAggregateInputObjectSchema } from './objects/ChatsMaxAggregateInput.schema';

export const ChatsAggregateSchema: z.ZodType<Prisma.ChatsAggregateArgs> = z.object({ orderBy: z.union([ChatsOrderByWithRelationInputObjectSchema, ChatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatsWhereInputObjectSchema.optional(), cursor: ChatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ChatsCountAggregateInputObjectSchema ]).optional(), _min: ChatsMinAggregateInputObjectSchema.optional(), _max: ChatsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatsAggregateArgs>;

export const ChatsAggregateZodSchema = z.object({ orderBy: z.union([ChatsOrderByWithRelationInputObjectSchema, ChatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatsWhereInputObjectSchema.optional(), cursor: ChatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ChatsCountAggregateInputObjectSchema ]).optional(), _min: ChatsMinAggregateInputObjectSchema.optional(), _max: ChatsMaxAggregateInputObjectSchema.optional() }).strict();