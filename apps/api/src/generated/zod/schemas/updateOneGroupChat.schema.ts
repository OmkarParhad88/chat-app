import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './objects/GroupChatInclude.schema';
import { GroupChatUpdateInputObjectSchema as GroupChatUpdateInputObjectSchema } from './objects/GroupChatUpdateInput.schema';
import { GroupChatUncheckedUpdateInputObjectSchema as GroupChatUncheckedUpdateInputObjectSchema } from './objects/GroupChatUncheckedUpdateInput.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './objects/GroupChatWhereUniqueInput.schema';

export const GroupChatUpdateOneSchema: z.ZodType<Prisma.GroupChatUpdateArgs> = z.object({ select: GroupChatSelectObjectSchema.optional(), include: GroupChatIncludeObjectSchema.optional(), data: z.union([GroupChatUpdateInputObjectSchema, GroupChatUncheckedUpdateInputObjectSchema]), where: GroupChatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.GroupChatUpdateArgs>;

export const GroupChatUpdateOneZodSchema = z.object({ select: GroupChatSelectObjectSchema.optional(), include: GroupChatIncludeObjectSchema.optional(), data: z.union([GroupChatUpdateInputObjectSchema, GroupChatUncheckedUpdateInputObjectSchema]), where: GroupChatWhereUniqueInputObjectSchema }).strict();