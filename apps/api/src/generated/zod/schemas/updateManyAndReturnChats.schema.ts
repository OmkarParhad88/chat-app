import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsUpdateManyMutationInputObjectSchema as ChatsUpdateManyMutationInputObjectSchema } from './objects/ChatsUpdateManyMutationInput.schema';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';

export const ChatsUpdateManyAndReturnSchema: z.ZodType<Prisma.ChatsUpdateManyAndReturnArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), data: ChatsUpdateManyMutationInputObjectSchema, where: ChatsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatsUpdateManyAndReturnArgs>;

export const ChatsUpdateManyAndReturnZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), data: ChatsUpdateManyMutationInputObjectSchema, where: ChatsWhereInputObjectSchema.optional() }).strict();