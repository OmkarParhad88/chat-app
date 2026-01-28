import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserWhereInputObjectSchema as GroupUserWhereInputObjectSchema } from './objects/GroupUserWhereInput.schema';

export const GroupUserDeleteManySchema: z.ZodType<Prisma.GroupUserDeleteManyArgs> =
  z
    .object({ where: GroupUserWhereInputObjectSchema.optional() })
    .strict() as unknown as z.ZodType<Prisma.GroupUserDeleteManyArgs>;

export const GroupUserDeleteManyZodSchema = z
  .object({ where: GroupUserWhereInputObjectSchema.optional() })
  .strict();
