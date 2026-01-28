import type { Prisma } from '../../prisma/client';
import * as z from 'zod';
import { ChatSelectObjectSchema as ChatSelectObjectSchema } from './objects/ChatSelect.schema';
import { ChatIncludeObjectSchema as ChatIncludeObjectSchema } from './objects/ChatInclude.schema';
import { ChatCreateInputObjectSchema as ChatCreateInputObjectSchema } from './objects/ChatCreateInput.schema';
import { ChatUncheckedCreateInputObjectSchema as ChatUncheckedCreateInputObjectSchema } from './objects/ChatUncheckedCreateInput.schema';

export const ChatCreateOneSchema: z.ZodType<Prisma.ChatCreateArgs> = z
  .object({
    select: ChatSelectObjectSchema.optional(),
    include: ChatIncludeObjectSchema.optional(),
    data: z.union([
      ChatCreateInputObjectSchema,
      ChatUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict() as unknown as z.ZodType<Prisma.ChatCreateArgs>;

export const ChatCreateOneZodSchema = z
  .object({
    select: ChatSelectObjectSchema.optional(),
    include: ChatIncludeObjectSchema.optional(),
    data: z.union([
      ChatCreateInputObjectSchema,
      ChatUncheckedCreateInputObjectSchema,
    ]),
  })
  .strict();
