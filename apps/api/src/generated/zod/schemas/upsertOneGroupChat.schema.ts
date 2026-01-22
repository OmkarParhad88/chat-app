import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { GroupChatSelectObjectSchema as GroupChatSelectObjectSchema } from './objects/GroupChatSelect.schema';
import { GroupChatIncludeObjectSchema as GroupChatIncludeObjectSchema } from './objects/GroupChatInclude.schema';
import { GroupChatWhereUniqueInputObjectSchema as GroupChatWhereUniqueInputObjectSchema } from './objects/GroupChatWhereUniqueInput.schema';
import { GroupChatCreateInputObjectSchema as GroupChatCreateInputObjectSchema } from './objects/GroupChatCreateInput.schema';
import { GroupChatUncheckedCreateInputObjectSchema as GroupChatUncheckedCreateInputObjectSchema } from './objects/GroupChatUncheckedCreateInput.schema';
import { GroupChatUpdateInputObjectSchema as GroupChatUpdateInputObjectSchema } from './objects/GroupChatUpdateInput.schema';
import { GroupChatUncheckedUpdateInputObjectSchema as GroupChatUncheckedUpdateInputObjectSchema } from './objects/GroupChatUncheckedUpdateInput.schema';

export const GroupChatUpsertOneSchema: z.ZodType<Prisma.GroupChatUpsertArgs> = z.object({ select: GroupChatSelectObjectSchema.optional(), include: GroupChatIncludeObjectSchema.optional(), where: GroupChatWhereUniqueInputObjectSchema, create: z.union([ GroupChatCreateInputObjectSchema, GroupChatUncheckedCreateInputObjectSchema ]), update: z.union([ GroupChatUpdateInputObjectSchema, GroupChatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.GroupChatUpsertArgs>;

export const GroupChatUpsertOneZodSchema = z.object({ select: GroupChatSelectObjectSchema.optional(), include: GroupChatIncludeObjectSchema.optional(), where: GroupChatWhereUniqueInputObjectSchema, create: z.union([ GroupChatCreateInputObjectSchema, GroupChatUncheckedCreateInputObjectSchema ]), update: z.union([ GroupChatUpdateInputObjectSchema, GroupChatUncheckedUpdateInputObjectSchema ]) }).strict();