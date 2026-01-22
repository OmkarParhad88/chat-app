import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersWhereUniqueInputObjectSchema as GroupUsersWhereUniqueInputObjectSchema } from './objects/GroupUsersWhereUniqueInput.schema';
import { GroupUsersCreateInputObjectSchema as GroupUsersCreateInputObjectSchema } from './objects/GroupUsersCreateInput.schema';
import { GroupUsersUncheckedCreateInputObjectSchema as GroupUsersUncheckedCreateInputObjectSchema } from './objects/GroupUsersUncheckedCreateInput.schema';
import { GroupUsersUpdateInputObjectSchema as GroupUsersUpdateInputObjectSchema } from './objects/GroupUsersUpdateInput.schema';
import { GroupUsersUncheckedUpdateInputObjectSchema as GroupUsersUncheckedUpdateInputObjectSchema } from './objects/GroupUsersUncheckedUpdateInput.schema';

export const GroupUsersUpsertOneSchema: z.ZodType<Prisma.GroupUsersUpsertArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema, create: z.union([ GroupUsersCreateInputObjectSchema, GroupUsersUncheckedCreateInputObjectSchema ]), update: z.union([ GroupUsersUpdateInputObjectSchema, GroupUsersUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GroupUsersUpsertArgs>;

export const GroupUsersUpsertOneZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), where: GroupUsersWhereUniqueInputObjectSchema, create: z.union([ GroupUsersCreateInputObjectSchema, GroupUsersUncheckedCreateInputObjectSchema ]), update: z.union([ GroupUsersUpdateInputObjectSchema, GroupUsersUncheckedUpdateInputObjectSchema ]) }).strict();