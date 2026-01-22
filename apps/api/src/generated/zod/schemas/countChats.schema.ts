import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsOrderByWithRelationInputObjectSchema as ChatsOrderByWithRelationInputObjectSchema } from './objects/ChatsOrderByWithRelationInput.schema';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';
import { ChatsCountAggregateInputObjectSchema as ChatsCountAggregateInputObjectSchema } from './objects/ChatsCountAggregateInput.schema';

export const ChatsCountSchema: z.ZodType<Prisma.ChatsCountArgs> = z.object({ orderBy: z.union([ChatsOrderByWithRelationInputObjectSchema, ChatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatsWhereInputObjectSchema.optional(), cursor: ChatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ChatsCountAggregateInputObjectSchema ]).optional() }).strict() as unknown as z.ZodType<Prisma.ChatsCountArgs>;

export const ChatsCountZodSchema = z.object({ orderBy: z.union([ChatsOrderByWithRelationInputObjectSchema, ChatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatsWhereInputObjectSchema.optional(), cursor: ChatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), select: z.union([ z.literal(true), ChatsCountAggregateInputObjectSchema ]).optional() }).strict();