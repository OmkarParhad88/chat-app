import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './objects/ChatsInclude.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';

export const ChatsFindUniqueOrThrowSchema: z.ZodType<Prisma.ChatsFindUniqueOrThrowArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), where: ChatsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatsFindUniqueOrThrowArgs>;

export const ChatsFindUniqueOrThrowZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), where: ChatsWhereUniqueInputObjectSchema }).strict();