import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      every: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
      some: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
      none: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
    })
    .strict();
export const GroupChatListRelationFilterObjectSchema: z.ZodType<Prisma.GroupChatListRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatListRelationFilter>;
export const GroupChatListRelationFilterObjectZodSchema = makeSchema();
