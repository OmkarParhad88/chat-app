import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';

export const GroupUsersFindUniqueSchema: z.ZodType<Prisma.GroupUsersFindUniqueArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUsersFindUniqueArgs>;

export const GroupUsersFindUniqueZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema }).strict();