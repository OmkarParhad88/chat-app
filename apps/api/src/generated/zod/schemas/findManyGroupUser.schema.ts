import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserIncludeObjectSchema as GroupUserIncludeObjectSchema } from './objects/GroupUserInclude.schema';
import { GroupUserOrderByWithRelationInputObjectSchema as GroupUserOrderByWithRelationInputObjectSchema } from './objects/GroupUserOrderByWithRelationInput.schema';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './objects/GroupUserWhereUniqueInput.schema';
import { GroupUserScalarFieldEnumSchema } from './enums/GroupUserScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const GroupUserFindManySelectSchema: z.ZodType<Prisma.GroupUserSelect> =
  z
    .object({
      id: z.boolean().optional(),
      group: z.boolean().optional(),
      group_id: z.boolean().optional(),
      name: z.boolean().optional(),
      created_at: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserSelect>;

export const GroupUserFindManySelectZodSchema = z
  .object({
    id: z.boolean().optional(),
    group: z.boolean().optional(),
    group_id: z.boolean().optional(),
    name: z.boolean().optional(),
    created_at: z.boolean().optional(),
  })
  .strict();

export const GroupUserFindManySchema: z.ZodType<Prisma.GroupUserFindManyArgs> =
  z
    .object({
      select: GroupUserFindManySelectSchema.optional(),
      include: z.lazy(() => GroupUserIncludeObjectSchema.optional()),
      orderBy: z
        .union([
          GroupUserOrderByWithRelationInputObjectSchema,
          GroupUserOrderByWithRelationInputObjectSchema.array(),
        ])
        .optional(),
      where: GroupUserWhereInputObjectSchema.optional(),
      cursor: GroupUserWhereUniqueInputObjectSchema.optional(),
      take: z.number().optional(),
      skip: z.number().optional(),
      distinct: z
        .union([
          GroupUserScalarFieldEnumSchema,
          GroupUserScalarFieldEnumSchema.array(),
        ])
        .optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserFindManyArgs>;

export const GroupUserFindManyZodSchema = z
  .object({
    select: GroupUserFindManySelectSchema.optional(),
    include: z.lazy(() => GroupUserIncludeObjectSchema.optional()),
    orderBy: z
      .union([
        GroupUserOrderByWithRelationInputObjectSchema,
        GroupUserOrderByWithRelationInputObjectSchema.array(),
      ])
      .optional(),
    where: GroupUserWhereInputObjectSchema.optional(),
    cursor: GroupUserWhereUniqueInputObjectSchema.optional(),
    take: z.number().optional(),
    skip: z.number().optional(),
    distinct: z
      .union([
        GroupUserScalarFieldEnumSchema,
        GroupUserScalarFieldEnumSchema.array(),
      ])
      .optional(),
  })
  .strict();
