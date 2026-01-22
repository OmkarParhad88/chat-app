import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupUsersCreateManyInputObjectSchema as GroupUsersCreateManyInputObjectSchema } from './objects/GroupUsersCreateManyInput.schema';

export const GroupUsersCreateManySchema: z.ZodType<Prisma.GroupUsersCreateManyArgs> = z.object({ data: z.union([ GroupUsersCreateManyInputObjectSchema, z.array(GroupUsersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GroupUsersCreateManyArgs>;

export const GroupUsersCreateManyZodSchema = z.object({ data: z.union([ GroupUsersCreateManyInputObjectSchema, z.array(GroupUsersCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();