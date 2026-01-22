import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsCreateManyInputObjectSchema as ChatsCreateManyInputObjectSchema } from './objects/ChatsCreateManyInput.schema';

export const ChatsCreateManyAndReturnSchema: z.ZodType<Prisma.ChatsCreateManyAndReturnArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), data: z.union([ ChatsCreateManyInputObjectSchema, z.array(ChatsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChatsCreateManyAndReturnArgs>;

export const ChatsCreateManyAndReturnZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), data: z.union([ ChatsCreateManyInputObjectSchema, z.array(ChatsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();