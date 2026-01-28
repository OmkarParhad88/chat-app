import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatWhereInputObjectSchema as ChatWhereInputObjectSchema } from './ChatWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      every: z.lazy(() => ChatWhereInputObjectSchema).optional(),
      some: z.lazy(() => ChatWhereInputObjectSchema).optional(),
      none: z.lazy(() => ChatWhereInputObjectSchema).optional(),
    })
    .strict();
export const ChatListRelationFilterObjectSchema: z.ZodType<Prisma.ChatListRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.ChatListRelationFilter>;
export const ChatListRelationFilterObjectZodSchema = makeSchema();
