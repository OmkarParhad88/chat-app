import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';

export const GroupUsersFindUniqueOrThrowSchema: z.ZodType<Prisma.GroupUsersFindUniqueOrThrowArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUsersFindUniqueOrThrowArgs>;

export const GroupUsersFindUniqueOrThrowZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema }).strict();