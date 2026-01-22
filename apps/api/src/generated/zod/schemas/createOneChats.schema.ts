import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatsSelectObjectSchema as ChatsSelectObjectSchema } from './objects/ChatsSelect.schema';
import { ChatsIncludeObjectSchema as ChatsIncludeObjectSchema } from './objects/ChatsInclude.schema';
import { ChatsCreateInputObjectSchema as ChatsCreateInputObjectSchema } from './objects/ChatsCreateInput.schema';
import { ChatsUncheckedCreateInputObjectSchema as ChatsUncheckedCreateInputObjectSchema } from './objects/ChatsUncheckedCreateInput.schema';

export const ChatsCreateOneSchema: z.ZodType<Prisma.ChatsCreateArgs> = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), data: z.union([ChatsCreateInputObjectSchema, ChatsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ChatsCreateArgs>;

export const ChatsCreateOneZodSchema = z.object({ select: ChatsSelectObjectSchema.optional(), include: ChatsIncludeObjectSchema.optional(), data: z.union([ChatsCreateInputObjectSchema, ChatsUncheckedCreateInputObjectSchema]) }).strict();