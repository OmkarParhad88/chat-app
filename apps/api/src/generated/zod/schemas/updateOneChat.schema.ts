import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './objects/ChatInclude.schema';
import { ChatUpdateInputObjectSchema as ChatUpdateInputObjectSchema } from './objects/ChatUpdateInput.schema';
import { ChatUncheckedUpdateInputObjectSchema as ChatUncheckedUpdateInputObjectSchema } from './objects/ChatUncheckedUpdateInput.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';

export const ChatUpdateOneSchema: z.ZodType<Prisma.ChatUpdateArgs> = z.object({ select: ChatSelectObjectSchema.optional(), include: ChatIncludeObjectSchema.optional(), data: z.union([ChatUpdateInputObjectSchema, ChatUncheckedUpdateInputObjectSchema]), where: ChatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatUpdateArgs>;

export const ChatUpdateOneZodSchema = z.object({ select: ChatSelectObjectSchema.optional(), include: ChatIncludeObjectSchema.optional(), data: z.union([ChatUpdateInputObjectSchema, ChatUncheckedUpdateInputObjectSchema]), where: ChatWhereUniqueInputObjectSchema }).strict();