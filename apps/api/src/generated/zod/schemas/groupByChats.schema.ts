import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';
import { ChatsOrderByWithAggregationInputObjectSchema as ChatsOrderByWithAggregationInputObjectSchema } from './objects/ChatsOrderByWithAggregationInput.schema';
import { ChatsScalarWhereWithAggregatesInputObjectSchema as ChatsScalarWhereWithAggregatesInputObjectSchema } from './objects/ChatsScalarWhereWithAggregatesInput.schema';
import { ChatsScalarFieldEnumSchema } from './enums/ChatsScalarFieldEnum.schema';
import { ChatsCountAggregateInputObjectSchema as ChatsCountAggregateInputObjectSchema } from './objects/ChatsCountAggregateInput.schema';
import { ChatsMinAggregateInputObjectSchema as ChatsMinAggregateInputObjectSchema } from './objects/ChatsMinAggregateInput.schema';
import { ChatsMaxAggregateInputObjectSchema as ChatsMaxAggregateInputObjectSchema } from './objects/ChatsMaxAggregateInput.schema';

export const ChatsGroupBySchema: z.ZodType<Prisma.ChatsGroupByArgs> = z.object({ where: ChatsWhereInputObjectSchema.optional(), orderBy: z.union([ChatsOrderByWithAggregationInputObjectSchema, ChatsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ChatsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ChatsScalarFieldEnumSchema), _count: z.union([ z.literal(true), ChatsCountAggregateInputObjectSchema ]).optional(), _min: ChatsMinAggregateInputObjectSchema.optional(), _max: ChatsMaxAggregateInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatsGroupByArgs>;

export const ChatsGroupByZodSchema = z.object({ where: ChatsWhereInputObjectSchema.optional(), orderBy: z.union([ChatsOrderByWithAggregationInputObjectSchema, ChatsOrderByWithAggregationInputObjectSchema.array()]).optional(), having: ChatsScalarWhereWithAggregatesInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), by: z.array(ChatsScalarFieldEnumSchema), _count: z.union([ z.literal(true), ChatsCountAggregateInputObjectSchema ]).optional(), _min: ChatsMinAggregateInputObjectSchema.optional(), _max: ChatsMaxAggregateInputObjectSchema.optional() }).strict();