import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './objects/GroupUserSelect.schema';
import { GroupUserIncludeObjectSchema as GroupUserIncludeObjectSchema } from './objects/GroupUserInclude.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './objects/GroupUserWhereUniqueInput.schema';
import { GroupUserCreateInputObjectSchema as GroupUserCreateInputObjectSchema } from './objects/GroupUserCreateInput.schema';
import { GroupUserUncheckedCreateInputObjectSchema as GroupUserUncheckedCreateInputObjectSchema } from './objects/GroupUserUncheckedCreateInput.schema';
import { GroupUserUpdateInputObjectSchema as GroupUserUpdateInputObjectSchema } from './objects/GroupUserUpdateInput.schema';
import { GroupUserUncheckedUpdateInputObjectSchema as GroupUserUncheckedUpdateInputObjectSchema } from './objects/GroupUserUncheckedUpdateInput.schema';

export const GroupUserUpsertOneSchema: z.ZodType<Prisma.GroupUserUpsertArgs> = z.object({ select: GroupUserSelectObjectSchema.optional(), include: GroupUserIncludeObjectSchema.optional(), where: GroupUserWhereUniqueInputObjectSchema, create: z.union([ GroupUserCreateInputObjectSchema, GroupUserUncheckedCreateInputObjectSchema ]), update: z.union([ GroupUserUpdateInputObjectSchema, GroupUserUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GroupUserUpsertArgs>;

export const GroupUserUpsertOneZodSchema = z.object({ select: GroupUserSelectObjectSchema.optional(), include: GroupUserIncludeObjectSchema.optional(), where: GroupUserWhereUniqueInputObjectSchema, create: z.union([ GroupUserCreateInputObjectSchema, GroupUserUncheckedCreateInputObjectSchema ]), update: z.union([ GroupUserUpdateInputObjectSchema, GroupUserUncheckedUpdateInputObjectSchema ]) }).strict();