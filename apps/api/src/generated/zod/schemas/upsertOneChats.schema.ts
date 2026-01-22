import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './objects/ChatsInclude.schema';
import { ChatsWhereUniqueInputObjectSchema as ChatsWhereUniqueInputObjectSchema } from './objects/ChatsWhereUniqueInput.schema';
import { ChatsCreateInputObjectSchema as ChatsCreateInputObjectSchema } from './objects/ChatsCreateInput.schema';
import { ChatsUncheckedCreateInputObjectSchema as ChatsUncheckedCreateInputObjectSchema } from './objects/ChatsUncheckedCreateInput.schema';
import { ChatsUpdateInputObjectSchema as ChatsUpdateInputObjectSchema } from './objects/ChatsUpdateInput.schema';
import { ChatsUncheckedUpdateInputObjectSchema as ChatsUncheckedUpdateInputObjectSchema } from './objects/ChatsUncheckedUpdateInput.schema';

export const ChatsUpsertOneSchema: z.ZodType<Prisma.ChatsUpsertArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), where: ChatsWhereUniqueInputObjectSchema, create: z.union([ ChatsCreateInputObjectSchema, ChatsUncheckedCreateInputObjectSchema ]), update: z.union([ ChatsUpdateInputObjectSchema, ChatsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ChatsUpsertArgs>;

export const ChatsUpsertOneZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), where: ChatsWhereUniqueInputObjectSchema, create: z.union([ ChatsCreateInputObjectSchema, ChatsUncheckedCreateInputObjectSchema ]), update: z.union([ ChatsUpdateInputObjectSchema, ChatsUncheckedUpdateInputObjectSchema ]) }).strict();