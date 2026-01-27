import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatCreateManyInputObjectSchema as ChatCreateManyInputObjectSchema } from './objects/ChatCreateManyInput.schema';

export const ChatCreateManySchema: z.ZodType<Prisma.ChatCreateManyArgs> = z.object({ data: z.union([ ChatCreateManyInputObjectSchema, z.array(ChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChatCreateManyArgs>;

export const ChatCreateManyZodSchema = z.object({ data: z.union([ ChatCreateManyInputObjectSchema, z.array(ChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();