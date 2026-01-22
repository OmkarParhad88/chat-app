import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatUpdateManyMutationInputObjectSchema as GroupChatUpdateManyMutationInputObjectSchema } from './objects/GroupChatUpdateManyMutationInput.schema';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './objects/GroupChatWhereInput.schema';

export const GroupChatUpdateManySchema: z.ZodType<Prisma.GroupChatUpdateManyArgs> = z.object({ data: GroupChatUpdateManyMutationInputObjectSchema, where: GroupChatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.GroupChatUpdateManyArgs>;

export const GroupChatUpdateManyZodSchema = z.object({ data: GroupChatUpdateManyMutationInputObjectSchema, where: GroupChatWhereInputObjectSchema.optional() }).strict();