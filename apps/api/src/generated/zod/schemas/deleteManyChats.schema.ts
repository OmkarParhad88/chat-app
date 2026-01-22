import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './objects/ChatsWhereInput.schema';

export const ChatsDeleteManySchema: z.ZodType<Prisma.ChatsDeleteManyArgs> = z.object({ where: ChatsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatsDeleteManyArgs>;

export const ChatsDeleteManyZodSchema = z.object({ where: ChatsWhereInputObjectSchema.optional() }).strict();