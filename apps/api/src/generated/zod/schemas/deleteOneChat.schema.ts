import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './objects/ChatInclude.schema';
import { ChatWhereUniqueInputObjectSchema as ChatWhereUniqueInputObjectSchema } from './objects/ChatWhereUniqueInput.schema';

export const ChatDeleteOneSchema: z.ZodType<Prisma.ChatDeleteArgs> = z
  .object({
    select: ChatSelectObjectSchema.optional(),
    include: ChatIncludeObjectSchema.optional(),
    where: ChatWhereUniqueInputObjectSchema,
  })
  .strict() as unknown as z.ZodType<Prisma.ChatDeleteArgs>;

export const ChatDeleteOneZodSchema = z
  .object({
    select: ChatSelectObjectSchema.optional(),
    include: ChatIncludeObjectSchema.optional(),
    where: ChatWhereUniqueInputObjectSchema,
  })
  .strict();
