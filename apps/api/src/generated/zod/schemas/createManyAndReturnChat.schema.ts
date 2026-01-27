import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatCreateManyInputObjectSchema as ChatCreateManyInputObjectSchema } from './objects/ChatCreateManyInput.schema';

export const ChatCreateManyAndReturnSchema: z.ZodType<Prisma.ChatCreateManyAndReturnArgs> = z.object({ select: ChatSelectObjectSchema.optional(), data: z.union([ ChatCreateManyInputObjectSchema, z.array(ChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChatCreateManyAndReturnArgs>;

export const ChatCreateManyAndReturnZodSchema = z.object({ select: ChatSelectObjectSchema.optional(), data: z.union([ ChatCreateManyInputObjectSchema, z.array(ChatCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();