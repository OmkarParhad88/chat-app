import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsCreateManyInputObjectSchema as ChatsCreateManyInputObjectSchema } from './objects/ChatsCreateManyInput.schema';

export const ChatsCreateManySchema: z.ZodType<Prisma.ChatsCreateManyArgs> = z.object({ data: z.union([ ChatsCreateManyInputObjectSchema, z.array(ChatsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict() as unknown as z.ZodType<Prisma.ChatsCreateManyArgs>;

export const ChatsCreateManyZodSchema = z.object({ data: z.union([ ChatsCreateManyInputObjectSchema, z.array(ChatsCreateManyInputObjectSchema) ]), skipDuplicates: z.boolean().optional() }).strict();