import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersUpdateManyMutationInputObjectSchema as GroupUsersUpdateManyMutationInputObjectSchema } from './objects/GroupUsersUpdateManyMutationInput.schema';
import { GroupUsersWhereInputObjectSchema as GroupUsersWhereInputObjectSchema } from './objects/GroupUsersWhereInput.schema';

export const GroupUsersUpdateManySchema: z.ZodType<Prisma.GroupUsersUpdateManyArgs> = z.object({ data: GroupUsersUpdateManyMutationInputObjectSchema, where: GroupUsersWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersUpdateManyArgs>;

export const GroupUsersUpdateManyZodSchema = z.object({ data: GroupUsersUpdateManyMutationInputObjectSchema, where: GroupUsersWhereInputObjectSchema.optional() }).strict();