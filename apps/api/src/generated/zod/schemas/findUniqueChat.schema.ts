import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './objects/ChatInclude.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';

export const ChatFindUniqueSchema: z.ZodType<Prisma.ChatFindUniqueArgs> = z.object({ select: ChatSelectObjectSchema.optional(), include: ChatIncludeObjectSchema.optional(), where: ChatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatFindUniqueArgs>;

export const ChatFindUniqueZodSchema = z.object({ select: ChatSelectObjectSchema.optional(), include: ChatIncludeObjectSchema.optional(), where: ChatWhereUniqueInputObjectSchema }).strict();