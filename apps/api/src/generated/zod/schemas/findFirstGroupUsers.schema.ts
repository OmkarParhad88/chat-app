import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersOrderByWithRelationInputObjectSchema as GroupUsersOrderByWithRelationInputObjectSchema } from './objects/GroupUsersOrderByWithRelationInput.schema';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './objects/GroupUsersWhereInput.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';
import { GroupUsersScalarFieldEnumSchema } from './enums/GroupUsersScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupUsersFindFirstSelectSchema: z.ZodType<Prisma.GroupUsersSelect> = z.object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.GroupUsersSelect>;

export const GroupUsersFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional()
  }).strict();

export const GroupUsersFindFirstSchema: z.ZodType<Prisma.GroupUsersFindFirstArgs> = z.object({ select: GroupUsersFindFirstSelectSchema.optional(), include: z.lazy(() => GroupUsersIncludeObjectSchema.optional()), orderBy: z.union([GroupUsersOrderByWithRelationInputObjectSchema, GroupUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupUsersWhereInputObjectSchema.optional(), cursor: GroupUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupUsersScalarFieldEnumSchema, GroupUsersScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersFindFirstArgs>;

export const GroupUsersFindFirstZodSchema = z.object({ select: GroupUsersFindFirstSelectSchema.optional(), include: z.lazy(() => GroupUsersIncludeObjectSchema.optional()), orderBy: z.union([GroupUsersOrderByWithRelationInputObjectSchema, GroupUsersOrderByWithRelationInputObjectSchema.array()]).optional(), where: GroupUsersWhereInputObjectSchema.optional(), cursor: GroupUsersWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([GroupUsersScalarFieldEnumSchema, GroupUsersScalarFieldEnumSchema.array()]).optional() }).strict();