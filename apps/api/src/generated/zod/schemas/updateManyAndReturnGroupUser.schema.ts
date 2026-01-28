import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './objects/GroupUserSelect.schema';
import { GroupUserUpdateManyMutationInputObjectSchema as GroupUserUpdateManyMutationInputObjectSchema } from './objects/GroupUserUpdateManyMutationInput.schema';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';

export const GroupUserUpdateManyAndReturnSchema: z.ZodType<Prisma.GroupUserUpdateManyAndReturnArgs> =
  z
    .object({
      select: GroupUserSelectObjectSchema.optional(),
      data: GroupUserUpdateManyMutationInputObjectSchema,
      where: GroupUserWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.GroupUserUpdateManyAndReturnArgs>;

export const GroupUserUpdateManyAndReturnZodSchema = z
  .object({
    select: GroupUserSelectObjectSchema.optional(),
    data: GroupUserUpdateManyMutationInputObjectSchema,
    where: GroupUserWhereInputObjectSchema.optional(),
  })
  .strict();
