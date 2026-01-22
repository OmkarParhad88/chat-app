import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsUpdateManyMutationInputObjectSchema as ChatsUpdateManyMutationInputObjectSchema } from './objects/ChatsUpdateManyMutationInput.schema';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';

export const ChatsUpdateManySchema: z.ZodType<Prisma.ChatsUpdateManyArgs> = z.object({ data: ChatsUpdateManyMutationInputObjectSchema, where: ChatsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatsUpdateManyArgs>;

export const ChatsUpdateManyZodSchema = z.object({ data: ChatsUpdateManyMutationInputObjectSchema, where: ChatsWhereInputObjectSchema.optional() }).strict();