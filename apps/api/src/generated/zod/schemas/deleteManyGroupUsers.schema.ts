import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './objects/GroupUsersWhereInput.schema';

export const GroupUsersDeleteManySchema: z.ZodType<Prisma.GroupUsersDeleteManyArgs> = z.object({ where: GroupUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersDeleteManyArgs>;

export const GroupUsersDeleteManyZodSchema = z.object({ where: GroupUsersWhereInputObjectSchema.optional() }).strict();