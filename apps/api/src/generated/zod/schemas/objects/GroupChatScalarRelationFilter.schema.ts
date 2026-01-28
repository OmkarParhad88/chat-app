import * as z from 'zod';
import type { Prisma } from '../../../prisma/client';
import { GroupChatWhereInputObjectSchema as GroupChatWhereInputObjectSchema } from './GroupChatWhereInput.schema';

const makeSchema = () =>
  z
    .object({
      is: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
      isNot: z.lazy(() => GroupChatWhereInputObjectSchema).optional(),
    })
    .strict();
export const GroupChatScalarRelationFilterObjectSchema: z.ZodType<Prisma.GroupChatScalarRelationFilter> =
  makeSchema() as unknown as z.ZodType<Prisma.GroupChatScalarRelationFilter>;
export const GroupChatScalarRelationFilterObjectZodSchema = makeSchema();
