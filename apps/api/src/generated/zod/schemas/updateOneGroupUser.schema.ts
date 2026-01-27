import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUserSelectObjectSchema as GroupUserSelectObjectSchema } from './objects/GroupUserSelect.schema';
import { GroupUserIncludeObjectSchema as GroupUserIncludeObjectSchema } from './objects/GroupUserInclude.schema';
import { GroupUserUpdateInputObjectSchema as GroupUserUpdateInputObjectSchema } from './objects/GroupUserUpdateInput.schema';
import { GroupUserUncheckedUpdateInputObjectSchema as GroupUserUncheckedUpdateInputObjectSchema } from './objects/GroupUserUncheckedUpdateInput.schema';
import { GroupUserWhereUniqueInputObjectSchema as GroupUserWhereUniqueInputObjectSchema } from './objects/GroupUserWhereUniqueInput.schema';

export const GroupUserUpdateOneSchema: z.ZodType<Prisma.GroupUserUpdateArgs> = z.object({ select: GroupUserSelectObjectSchema.optional(), include: GroupUserIncludeObjectSchema.optional(), data: z.union([GroupUserUpdateInputObjectSchema, GroupUserUncheckedUpdateInputObjectSchema]), where: GroupUserWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupUserUpdateArgs>;

export const GroupUserUpdateOneZodSchema = z.object({ select: GroupUserSelectObjectSchema.optional(), include: GroupUserIncludeObjectSchema.optional(), data: z.union([GroupUserUpdateInputObjectSchema, GroupUserUncheckedUpdateInputObjectSchema]), where: GroupUserWhereUniqueInputObjectSchema }).strict();