import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatCreateManyInputObjectSchema as GroupChatCreateManyInputObjectSchema } from './objects/GroupChatCreateManyInput.schema';

export const GroupChatCreateManySchema: z.ZodType<Prisma.GroupChatCreateManyArgs> = z.object({ data: z.union([ GroupChatCreateManyInputObjectSchema, z.array(GroupChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.GroupChatCreateManyArgs>;

export const GroupChatCreateManyZodSchema = z.object({ data: z.union([ GroupChatCreateManyInputObjectSchema, z.array(GroupChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();