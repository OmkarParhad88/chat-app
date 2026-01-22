import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './objects/GroupChatInclude.schema';
import { GroupChatOrderByWithRelationInputObjectSchema as GroupChatOrderByWithRelationInputObjectSchema } from './objects/GroupChatOrderByWithRelationInput.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './objects/GroupChatWhereInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './objects/GroupChatWhereUniqueInput.schema';
import { GroupChatScalarFieldEnumSchema } from './enums/GroupChatScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupChatFindManySelectSchema: z.ZodType<Prisma.GroupChatSelect> = z.object({
    id: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    title: z.boolean().optional(),
    passcode: z.boolean().optional(),
    created_at: z.boolean().optional(),
    Chats: z.boolean().optional(),
    GroupUsers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GroupChatSelect>;

export const GroupChatFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    user: z.boolean().optional(),
    user_id: z.boolean().optional(),
    title: z.boolean().optional(),
    passcode: z.boolean().optional(),
    created_at: z.boolean().optional(),
    Chats: z.boolean().optional(),
    GroupUsers: z.boolean().optional(),
    _count: z.boolean().optional()
  }).strict();

export const GroupChatFindManySchema: z.ZodType<Prisma.GroupChatFindManyArgs> = z.object({ select: GroupChatFindManySelectSchema.optional(), include: z.lazy(() => GroupChatIncludeObjectSchema.optional()), orderBy: z.union([GroupChatOrderByWithRelationInputObjectSchema, GroupChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupChatWhereInputObjectSchema.optional(), cursor: GroupChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupChatScalarFieldEnumSchema, GroupChatScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupChatFindManyArgs>;

export const GroupChatFindManyZodSchema = z.object({ select: GroupChatFindManySelectSchema.optional(), include: z.lazy(() => GroupChatIncludeObjectSchema.optional()), orderBy: z.union([GroupChatOrderByWithRelationInputObjectSchema, GroupChatOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupChatWhereInputObjectSchema.optional(), cursor: GroupChatWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupChatScalarFieldEnumSchema, GroupChatScalarFieldEnumSchema.array()]).optional() }).strict();