import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersUpdateManyMutationInputObjectSchema as GroupUsersUpdateManyMutationInputObjectSchema } from './objects/GroupUsersUpdateManyMutationInput.schema';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './objects/GroupUsersWhereInput.schema';

export const GroupUsersUpdateManyAndReturnSchema: z.ZodType<Prisma.GroupUsersUpdateManyAndReturnArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), data: GroupUsersUpdateManyMutationInputObjectSchema, where: GroupUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersUpdateManyAndReturnArgs>;

export const GroupUsersUpdateManyAndReturnZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), data: GroupUsersUpdateManyMutationInputObjectSchema, where: GroupUsersWhereInputObjectSchema.optional() }).strict();