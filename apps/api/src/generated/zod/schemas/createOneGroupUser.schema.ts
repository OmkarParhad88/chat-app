import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './objects/GroupUserSelect.schema';
import { GroupUserIncludeObjectSchema as GroupUserIncludeObjectSchema } from './objects/GroupUserInclude.schema';
import { GroupUserCreateInputObjectSchema as GroupUserCreateInputObjectSchema } from './objects/GroupUserCreateInput.schema';
import { GroupUserUncheckedCreateInputObjectSchema as GroupUserUncheckedCreateInputObjectSchema } from './objects/GroupUserUncheckedCreateInput.schema';

export const GroupUserCreateOneSchema: z.ZodType<Prisma.GroupUserCreateArgs> = z
  .object({
    select: GroupUserSelectObjectSchema.optional(),
    include: GroupUserIncludeObjectSchema.optional(),
    data: z.union([
      GroupUserCreateInputObjectSchema,
      GroupUserUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict() as unknown as z.ZodType<Prisma.GroupUserCreateArgs>;

export const GroupUserCreateOneZodSchema = z
  .object({
    select: GroupUserSelectObjectSchema.optional(),
    include: GroupUserIncludeObjectSchema.optional(),
    data: z.union([
      GroupUserCreateInputObjectSchema,
      GroupUserUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
