import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersUpdateInputObjectSchema as GroupUsersUpdateInputObjectSchema } from './objects/GroupUsersUpdateInput.schema';
import { GroupUsersUncheckedUpdateInputObjectSchema as GroupUsersUncheckedUpdateInputObjectSchema } from './objects/GroupUsersUncheckedUpdateInput.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';

export const GroupUsersUpdateOneSchema: z.ZodType<Prisma.GroupUsersUpdateArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), data: z.union([GroupUsersUpdateInputObjectSchema, GroupUsersUncheckedUpdateInputObjectSchema]), where: GroupUsersWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUsersUpdateArgs>;

export const GroupUsersUpdateOneZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), data: z.union([GroupUsersUpdateInputObjectSchema, GroupUsersUncheckedUpdateInputObjectSchema]), where: GroupUsersWhereUniqueInputObjectSchema }).strict();