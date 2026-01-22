import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';

export const GroupUsersDeleteOneSchema: z.ZodType<Prisma.GroupUsersDeleteArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUsersDeleteArgs>;

export const GroupUsersDeleteOneZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema }).strict();