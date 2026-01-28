import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserUpdateManyMutationInputObjectSchema as GroupUserUpdateManyMutationInputObjectSchema } from './objects/GroupUserUpdateManyMutationInput.schema';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';

export const GroupUserUpdateManySchema: z.ZodType<Prisma.GroupUserUpdateManyArgs> =
  z
    .object({
      data: GroupUserUpdateManyMutationInputObjectSchema,
      where: GroupUserWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserUpdateManyArgs>;

export const GroupUserUpdateManyZodSchema = z
  .object({
    data: GroupUserUpdateManyMutationInputObjectSchema,
    where: GroupUserWhereInputObjectSchema.optional(),
  })
  .strict();
