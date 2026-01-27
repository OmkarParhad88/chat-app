import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatUpdateManyMutationInputObjectSchema as ChatUpdateManyMutationInputObjectSchema } from './objects/ChatUpdateManyMutationInput.schema';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';

export const ChatUpdateManySchema: z.ZodType<Prisma.ChatUpdateManyArgs> = z.object({ data: ChatUpdateManyMutationInputObjectSchema, where: ChatWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ChatUpdateManyArgs>;

export const ChatUpdateManyZodSchema = z.object({ data: ChatUpdateManyMutationInputObjectSchema, where: ChatWhereInputObjectSchema.optional() }).strict();