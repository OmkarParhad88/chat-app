import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersIncludeObjectSchema as GroupUsersIncludeObjectSchema } from './objects/GroupUsersInclude.schema';
import { GroupUsersCreateInputObjectSchema as GroupUsersCreateInputObjectSchema } from './objects/GroupUsersCreateInput.schema';
import { GroupUsersUncheckedCreateInputObjectSchema as GroupUsersUncheckedCreateInputObjectSchema } from './objects/GroupUsersUncheckedCreateInput.schema';

export const GroupUsersCreateOneSchema: z.ZodType<Prisma.GroupUsersCreateArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), data: z.union([GroupUsersCreateInputObjectSchema, GroupUsersUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.GroupUsersCreateArgs>;

export const GroupUsersCreateOneZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), include: GroupUsersIncludeObjectSchema.optional(), data: z.union([GroupUsersCreateInputObjectSchema, GroupUsersUncheckedCreateInputObjectSchema]) }).strict();