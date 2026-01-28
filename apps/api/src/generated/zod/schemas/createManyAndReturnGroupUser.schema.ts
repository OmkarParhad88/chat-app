import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './objects/GroupUserSelect.schema';
import { GroupUserCreateManyInputObjectSchema as GroupUserCreateManyInputObjectSchema } from './objects/GroupUserCreateManyInput.schema';

export const GroupUserCreateManyAndReturnSchema: z.ZodType<Prisma.GroupUserCreateManyAndReturnArgs> =
  z
    .object({
      select: GroupUserSelectObjectSchema.optional(),
      data: z.union([
        GroupUserCreateManyInputObjectSchema,
        z.array(GroupUserCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserCreateManyAndReturnArgs>;

export const GroupUserCreateManyAndReturnZodSchema = z
  .object({
    select: GroupUserSelectObjectSchema.optional(),
    data: z.union([
      GroupUserCreateManyInputObjectSchema,
      z.array(GroupUserCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
