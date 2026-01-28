import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserCreateManyInputObjectSchema as GroupUserCreateManyInputObjectSchema } from './objects/GroupUserCreateManyInput.schema';

export const GroupUserCreateManySchema: z.ZodType<Prisma.GroupUserCreateManyArgs> =
  z
    .object({
      data: z.union([
        GroupUserCreateManyInputObjectSchema,
        z.array(GroupUserCreateManyInputObjectSchema),
      ]),
      skipDuplicates: z.boolean().optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserCreateManyArgs>;

export const GroupUserCreateManyZodSchema = z
  .object({
    data: z.union([
      GroupUserCreateManyInputObjectSchema,
      z.array(GroupUserCreateManyInputObjectSchema),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict();
