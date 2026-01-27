import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';

export const ChatDeleteManySchema: z.ZodType<Prisma.ChatDeleteManyArgs> = z.object({ where: ChatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatDeleteManyArgs>;

export const ChatDeleteManyZodSchema = z.object({ where: ChatWhereInputObjectSchema.optional() }).strict();