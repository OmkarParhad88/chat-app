import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatOrderByWithAggregationInputObjectSchema as ChatOrderByWithAggregationInputObjectSchema } from './objects/ChatOrderByWithAggregationInput.schema';
import { ChatScalarWhereWithAggregatesInputObjectSchema as ChatScalarWhereWithAggregatesInputObjectSchema } from './objects/ChatScalarWhereWithAggregatesInput.schema';
import { ChatScalarFieldEnumSchema } from './enums/ChatScalarFieldEnum.schema';
import { ChatCountAggregateInputObjectSchema as ChatCountAggregateInputObjectSchema } from './objects/ChatCountAggregateInput.schema';
import { ChatMinAggregateInputObjectSchema as ChatMinAggregateInputObjectSchema } from './objects/ChatMinAggregateInput.schema';
import { ChatMaxAggregateInputObjectSchema as ChatMaxAggregateInputObjectSchema } from './objects/ChatMaxAggregateInput.schema';

export const ChatGroupBySchema: z.ZodType<Prisma.ChatGroupByArgs> = z
  .object({
    where: ChatWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ChatOrderByWithAggregationInputObjectSchema,
        ChatOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: ChatScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ChatScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), ChatCountAggregateInputObjectSchema])
      .optional(),
    _min: ChatMinAggregateInputObjectSchema.optional(),
    _max: ChatMaxAggregateInputObjectSchema.optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.ChatGroupByArgs>;

export const ChatGroupByZodSchema = z
  .object({
    where: ChatWhereInputObjectSchema.optional(),
    orderBy: z
      .union([
        ChatOrderByWithAggregationInputObjectSchema,
        ChatOrderByWithAggregationInputObjectSchema.array(),
      ])
      .optional(),
    having: ChatScalarWhereWithAggregatesInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    by: z.array(ChatScalarFieldEnumSchema),
    _count: z
      .union([z.literal(true), ChatCountAggregateInputObjectSchema])
      .optional(),
    _min: ChatMinAggregateInputObjectSchema.optional(),
    _max: ChatMaxAggregateInputObjectSchema.optional(),
  })
  .strict();
