import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './objects/ChatsInclude.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';

export const ChatsDeleteOneSchema: z.ZodType<Prisma.ChatsDeleteArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), where: ChatsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatsDeleteArgs>;

export const ChatsDeleteOneZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), where: ChatsWhereUniqueInputObjectSchema }).strict();