import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './objects/ChatsInclude.schema';
import { ChatsOrderByWithRelationInputObjectSchema as ChatsOrderByWithRelationInputObjectSchema } from './objects/ChatsOrderByWithRelationInput.schema';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';
import { ChatsScalarFieldEnumSchema } from './enums/ChatsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ChatsFindFirstSelectSchema: z.ZodType<Prisma.ChatsSelect> = z.object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    message: z.boolean().optional(),
    name: z.boolean().optional(),
    file: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.ChatsSelect>;

export const ChatsFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    message: z.boolean().optional(),
    name: z.boolean().optional(),
    file: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const ChatsFindFirstSchema: z.ZodType<Prisma.ChatsFindFirstArgs> = z.object({ select: ChatsFindFirstSelectSchema.optional(), include: z.lazy(() => ChatsIncludeObjectSchema.optional()), orderBy: z.union([ChatsOrderByWithRelationInputObjectSchema, ChatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatsWhereInputObjectSchema.optional(), cursor: ChatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChatsScalarFieldEnumSchema, ChatsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.ChatsFindFirstArgs>;

export const ChatsFindFirstZodSchema = z.object({ select: ChatsFindFirstSelectSchema.optional(), include: z.lazy(() => ChatsIncludeObjectSchema.optional()), orderBy: z.union([ChatsOrderByWithRelationInputObjectSchema, ChatsOrderByWithRelationInputObjectSchema.array()]).optional(), where: ChatsWhereInputObjectSchema.optional(), cursor: ChatsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([ChatsScalarFieldEnumSchema, ChatsScalarFieldEnumSchema.array()]).optional() }).strict();