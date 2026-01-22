import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './objects/ChatsInclude.schema';
import { ChatsUpdateInputObjectSchema as ChatsUpdateInputObjectSchema } from './objects/ChatsUpdateInput.schema';
import { ChatsUncheckedUpdateInputObjectSchema as ChatsUncheckedUpdateInputObjectSchema } from './objects/ChatsUncheckedUpdateInput.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';

export const ChatsUpdateOneSchema: z.ZodType<Prisma.ChatsUpdateArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), data: z.union([ChatsUpdateInputObjectSchema, ChatsUncheckedUpdateInputObjectSchema]), where: ChatsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ChatsUpdateArgs>;

export const ChatsUpdateOneZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), data: z.union([ChatsUpdateInputObjectSchema, ChatsUncheckedUpdateInputObjectSchema]), where: ChatsWhereUniqueInputObjectSchema }).strict();