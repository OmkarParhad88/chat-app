import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatOrderByWithRelationInputObjectSchema as ChatOrderByWithRelationInputObjectSchema } from './objects/ChatOrderByWithRelationInput.schema';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatCountAggregateInputObjectSchema as ChatCountAggregateInputObjectSchema } from './objects/ChatCountAggregateInput.schema';
import { ChatMinAggregateInputObjectSchema as ChatMinAggregateInputObjectSchema } from './objects/ChatMinAggregateInput.schema';
import { ChatMaxAggregateInputObjectSchema as ChatMaxAggregateInputObjectSchema } from './objects/ChatMaxAggregateInput.schema';

export const ChatAggregateSchema: z.ZodType<Prisma.ChatAggregateArgs> = z.object({ orderBy: z.union([ChatOrderByWithRelationInputObjectSchema, ChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatWhereInputObjectSchema.optional(), cursor: ChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ChatCountAggregateInputObjectSchema ]).optional(), _min: ChatMinAggregateInputObjectSchema.optional(), _max: ChatMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatAggregateArgs>;

export const ChatAggregateZodSchema = z.object({ orderBy: z.union([ChatOrderByWithRelationInputObjectSchema, ChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatWhereInputObjectSchema.optional(), cursor: ChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), _count: z.union([ z.literal(true), ChatCountAggregateInputObjectSchema ]).optional(), _min: ChatMinAggregateInputObjectSchema.optional(), _max: ChatMaxAggregateInputObjectSchema.optional() }).strict();