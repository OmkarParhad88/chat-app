import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatOrderByWithRelationInputObjectSchema as ChatOrderByWithRelationInputObjectSchema } from './objects/ChatOrderByWithRelationInput.schema';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatCountAggregateInputObjectSchema as ChatCountAggregateInputObjectSchema } from './objects/ChatCountAggregateInput.schema';

export const ChatCountSchema: z.ZodType<Prisma.ChatCountArgs> = z
  .object({
    orderBy: z
      .union([
        ChatOrderByWithRelationInputObjectSchema,
        ChatOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ChatWhereInputObjectSchema.optional(),
    cursor: ChatWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), ChatCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict() as unknown as z.ZodType<Prisma.ChatCountArgs>;

export const ChatCountZodSchema = z
  .object({
    orderBy: z
      .union([
        ChatOrderByWithRelationInputObjectSchema,
        ChatOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: ChatWhereInputObjectSchema.optional(),
    cursor: ChatWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    select: z
      .union([z.literal(true), ChatCountAggregateInputObjectSchema])
      .optional(),
  })
  .strict();
