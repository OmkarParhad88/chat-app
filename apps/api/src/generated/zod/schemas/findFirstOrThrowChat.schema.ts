import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './objects/ChatInclude.schema';
import { ChatOrderByWithRelationInputObjectSchema as ChatOrderByWithRelationInputObjectSchema } from './objects/ChatOrderByWithRelationInput.schema';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatScalarFieldEnumSchema } from './enums/ChatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChatFindFirstOrThrowSelectSchema: z.ZodType<Prisma.ChatSelect> = z.object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    message: z.boolean().optional(),
    name: z.boolean().optional(),
    file: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChatSelect>;

export const ChatFindFirstOrThrowSelectZodSchema = z.object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    message: z.boolean().optional(),
    name: z.boolean().optional(),
    file: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ChatFindFirstOrThrowSchema: z.ZodType<Prisma.ChatFindFirstOrThrowArgs> = z.object({ select: ChatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ChatIncludeObjectSchema.optional()), orderBy: z.union([ChatOrderByWithRelationInputObjectSchema, ChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatWhereInputObjectSchema.optional(), cursor: ChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChatScalarFieldEnumSchema, ChatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChatFindFirstOrThrowArgs>;

export const ChatFindFirstOrThrowZodSchema = z.object({ select: ChatFindFirstOrThrowSelectSchema.optional(), include: z.lazy(() => ChatIncludeObjectSchema.optional()), orderBy: z.union([ChatOrderByWithRelationInputObjectSchema, ChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatWhereInputObjectSchema.optional(), cursor: ChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChatScalarFieldEnumSchema, ChatScalarFieldEnumSchema.array()]).optional() }).strict();