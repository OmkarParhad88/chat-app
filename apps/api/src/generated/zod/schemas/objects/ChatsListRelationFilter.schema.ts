import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { ChatsWhereInputObjectSchema as ChatsWhereInputObjectSchema } from './ChatsWhereInput.schema'

const makeSchema = () => z.object({
  every: z.lazy(() => ChatsWhereInputObjectSchema).optional(),
  some: z.lazy(() => ChatsWhereInputObjectSchema).optional(),
  none: z.lazy(() => ChatsWhereInputObjectSchema).optional()
}).strict();
export const ChatsListRelationFilterObjectSchema: z.ZodType<Prisma.ChatsListRelationFilter> = makeSchema() as unknown as z.ZodType<Prisma.ChatsListRelationFilter>;
export const ChatsListRelationFilterObjectZodSchema = makeSchema();
