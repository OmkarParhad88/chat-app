import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersSelectObjectSchema as GroupUsersSelectObjectSchema } from './objects/GroupUsersSelect.schema';
import { GroupUsersCreateManyInputObjectSchema as GroupUsersCreateManyInputObjectSchema } from './objects/GroupUsersCreateManyInput.schema';

export const GroupUsersCreateManyAndReturnSchema: z.ZodType<Prisma.GroupUsersCreateManyAndReturnArgs> = z.object({ select: GroupUsersSelectObjectSchema.optional(), data: z.union([ GroupUsersCreateManyInputObjectSchema, z.array(GroupUsersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersCreateManyAndReturnArgs>;

export const GroupUsersCreateManyAndReturnZodSchema = z.object({ select: GroupUsersSelectObjectSchema.optional(), data: z.union([ GroupUsersCreateManyInputObjectSchema, z.array(GroupUsersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();