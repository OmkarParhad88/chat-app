import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './objects/ChatInclude.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';
import { ChatCreateInputObjectSchema as ChatCreateInputObjectSchema } from './objects/ChatCreateInput.schema';
import { ChatUncheckedCreateInputObjectSchema as ChatUncheckedCreateInputObjectSchema } from './objects/ChatUncheckedCreateInput.schema';
import { ChatUpdateInputObjectSchema as ChatUpdateInputObjectSchema } from './objects/ChatUpdateInput.schema';
import { ChatUncheckedUpdateInputObjectSchema as ChatUncheckedUpdateInputObjectSchema } from './objects/ChatUncheckedUpdateInput.schema';

export const ChatUpsertOneSchema: z.ZodType<Prisma.ChatUpsertArgs> = z.object({ select: ChatSelectObjectSchema.optional(), include: ChatIncludeObjectSchema.optional(), where: ChatWhereUniqueInputObjectSchema, create: z.union([ ChatCreateInputObjectSchema, ChatUncheckedCreateInputObjectSchema ]), update: z.union([ ChatUpdateInputObjectSchema, ChatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ChatUpsertArgs>;

export const ChatUpsertOneZodSchema = z.object({ select: ChatSelectObjectSchema.optional(), include: ChatIncludeObjectSchema.optional(), where: ChatWhereUniqueInputObjectSchema, create: z.union([ ChatCreateInputObjectSchema, ChatUncheckedCreateInputObjectSchema ]), update: z.union([ ChatUpdateInputObjectSchema, ChatUncheckedUpdateInputObjectSchema ]) }).strict();