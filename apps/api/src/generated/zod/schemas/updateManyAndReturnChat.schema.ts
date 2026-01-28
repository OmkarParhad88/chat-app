import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatUpdateManyMutationInputObjectSchema as ChatUpdateManyMutationInputObjectSchema } from './objects/ChatUpdateManyMutationInput.schema';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './objects/ChatWhereInput.schema';

export const ChatUpdateManyAndReturnSchema: z.ZodType<Prisma.ChatUpdateManyAndReturnArgs> =
  z
    .object({
      select: ChatSelectObjectSchema.optional(),
      data: ChatUpdateManyMutationInputObjectSchema,
      where: ChatWhereInputObjectSchema.optional(),
    })
    .strict() as unknown as z.ZodType<Prisma.ChatUpdateManyAndReturnArgs>;

export const ChatUpdateManyAndReturnZodSchema = z
  .object({
    select: ChatSelectObjectSchema.optional(),
    data: ChatUpdateManyMutationInputObjectSchema,
    where: ChatWhereInputObjectSchema.optional(),
  })
  .strict();
